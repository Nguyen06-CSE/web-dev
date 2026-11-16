const fs = require('fs');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const content = fs.readFileSync('link.txt', 'utf8');
const lines = content.split('\n');

let currentLesson = null;
const lessons = [];

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  
  const lessonMatch = trimmed.match(/^Bài\s+(\d+)\.\s*(.*)/i);
  if (lessonMatch) {
    currentLesson = {
      num: parseInt(lessonMatch[1], 10),
      title: lessonMatch[2].trim(),
      links: []
    };
    lessons.push(currentLesson);
    continue;
  }
  
  if (currentLesson) {
    const urlMatch = trimmed.match(/(https?:\/\/[^\s]+)/);
    if (urlMatch) {
      currentLesson.links.push({
        label: trimmed.split(':')[0].replace(/^->\s*/, '').trim(),
        url: urlMatch[1].trim()
      });
    }
  }
}

const tasks = [];
for (const lesson of lessons) {
  if (lesson.links.length === 0) continue;
  if (lesson.links.length === 1) {
    tasks.push({
      lessonNum: lesson.num,
      title: lesson.title,
      filename: `bai${lesson.num}.md`,
      url: lesson.links[0].url
    });
  } else {
    lesson.links.forEach((l, idx) => {
      tasks.push({
        lessonNum: lesson.num,
        title: lesson.title,
        filename: `bai${lesson.num}-${idx + 1}.md`,
        url: l.url
      });
    });
  }
}

console.log(`Bắt đầu chuyển đổi ${tasks.length} file markdown...`);

async function runTask(task, index, total) {
  const prefix = `[${index + 1}/${total}] ${task.filename}`;
  if (task.url.includes('drive.google.com')) {
    const mdContent = `# Bài ${task.lessonNum}. ${task.title}\n\nLink tài liệu (Ebook):\n- [Xem Ebook trên Google Drive](${task.url})\n`;
    fs.writeFileSync(task.filename, mdContent, 'utf8');
    console.log(`${prefix} -> Đã lưu thông tin liên kết Google Drive.`);
    return;
  }

  const cmd = `npx --yes defuddle parse "${task.url}" -m -o "${task.filename}"`;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      await execPromise(cmd, { timeout: 60000 });
      console.log(`${prefix} -> Hoàn thành!`);
      return;
    } catch (err) {
      if (attempt === 2) {
        console.error(`${prefix} -> Thất bại sau 2 lần thử:`, err.message);
      } else {
        console.warn(`${prefix} -> Thử lại lần 2...`);
      }
    }
  }
}

async function runQueue(concurrency = 3) {
  let currentIndex = 0;
  const workers = Array(concurrency).fill(null).map(async () => {
    while (currentIndex < tasks.length) {
      const idx = currentIndex++;
      await runTask(tasks[idx], idx, tasks.length);
    }
  });
  await Promise.all(workers);
  console.log('=== ĐÃ HOÀN THÀNH TOÀN BỘ ===');
}

runQueue(3);
