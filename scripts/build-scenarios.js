/**
 * Generates scenario markdown files for git-troubleshooting-lab.
 * Run: node scripts/build-scenarios.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const scenariosDir = path.join(root, "scenarios");

const tools = ["cli", "cursor-vscode", "github-desktop", "fork"];

const scenarios = [
  {
    id: "01",
    slug: "01-clone-and-find-working-branch",
    title: "Clone repo và xác định branch đang được code chính",
    short: "Clone & tìm branch chính",
    symptom: "I don't know which branch to use",
    problem: `Developer clone repository về máy nhưng không biết:

- Hiện tại đang ở branch nào.
- Branch nào là branch chính.
- Team đang phát triển trên \`main\`, \`dev\`, \`develop\` hay một branch khác.
- Một branch có thể tồn tại lâu nhưng thực tế đã không còn được sử dụng.

Đây là lỗi rất phổ biến: clone repo → code ngay → sau vài ngày mới phát hiện đang code trên branch cũ.`,
    gitState: `Local sau clone:
- Branch mặc định (thường là \`main\` hoặc \`master\`)
- Nhiều remote branches (\`origin/*\`)

Cần xác định: default branch trên remote + branch team đang active.`,
    shouldNot: `- Code ngay trên branch vừa checkout mà không kiểm tra.
- Kết luận "branch có commit mới nhất = branch team đang code chính" mà không xem thêm PR, CI, docs.`,
    takeaway: `Luôn kiểm tra default branch, hoạt động gần đây (PR/CI/commit), và quy trình branching của team trước khi bắt đầu code.`,
    videos: {
      cli: "video/clone-voi-ssh.mp4",
      "cursor-vscode": "video/clone-voi-pat.mp4",
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `Kiểm tra branch hiện tại:

\`\`\`bash
git branch --show-current
\`\`\`

Hoặc:

\`\`\`bash
git status
\`\`\`

Xem tất cả branch:

\`\`\`bash
git branch -a
\`\`\`

Xem remote và branch mặc định:

\`\`\`bash
git remote show origin
\`\`\`

Xem các branch gần đây có hoạt động:

\`\`\`bash
git branch -r --sort=-committerdate
\`\`\`

Xem lịch sử tổng thể:

\`\`\`bash
git log --all --decorate --oneline --graph
\`\`\``,
      note: `Không nên kết luận chỉ từ commit date. Cần kiểm tra thêm: default branch trên GitHub/GitLab, Pull Requests gần đây, branch protection, CI/CD, README và quy trình branching của team.`,
    },
    cursor: {
      steps: `1. Nhìn **status bar** (góc dưới) để biết branch hiện tại.
2. Mở **Source Control** → xem branch / remote.
3. Command Palette (\`Ctrl+Shift+P\` / \`Cmd+Shift+P\`) → \`Git: Checkout to...\` để đổi branch.
4. Mở integrated terminal và chạy các lệnh CLI tương đương nếu cần xác minh.

GUI giúp nhìn branch dễ hơn, nhưng developer vẫn nên hiểu command tương ứng.`,
    },
    desktop: {
      steps: `1. **File → Clone repository** (hoặc Clone a repository từ welcome).
2. Nhìn **Current Branch** trên thanh công cụ.
3. Mở branch dropdown → kiểm tra local/remote branches.
4. **Fetch origin** để cập nhật danh sách remote.
5. Mở **History** để so sánh lịch sử commit giữa các branch.`,
    },
    fork: {
      steps: `1. **File → Clone...** để clone repository.
2. **Repository → Branches** để xem danh sách branch.
3. Kiểm tra branch hiện tại (highlighted).
4. Xem **Commit History**.
5. **Fetch** remote rồi so sánh các branch.`,
    },
  },
  {
    id: "02",
    slug: "02-create-branch-after-coding-on-main",
    title: "Code trên main rồi mới phát hiện chưa tạo branch",
    short: "Quên tạo branch (trên main)",
    symptom: "I accidentally coded on main",
    problem: `Developer đang ở \`main\`, đã sửa code nhưng chưa commit (hoặc đã commit nhầm), rồi mới nhận ra đáng ra phải tạo feature branch trước.

Không cần panic và không nhất thiết phải copy code sang nơi khác.`,
    gitState: `Trường hợp A — chưa commit:
\`\`\`text
main (working tree dirty)
\`\`\`

Trường hợp B — đã commit trên main:
\`\`\`text
main
  A
  |
  B  ← accidental commit
\`\`\``,
    shouldNot: `- Copy/paste thủ công sang thư mục khác.
- Force push lên \`main\` shared nếu đã push commit nhầm (làm theo quy trình team).
- \`git reset --hard\` khi chưa chắc muốn mất changes.`,
    takeaway: `Uncommitted changes đi theo khi bạn \`git switch -c\`. Nếu đã commit trên main chưa push: tạo branch tại HEAD rồi reset main về trước commit đó.`,
    videos: {
      cli: "video/example-2.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `### Chưa commit

\`\`\`bash
git status
git switch -c feature/my-feature
git add .
git commit -m "Add my feature"
git push -u origin feature/my-feature
\`\`\`

Changes chưa commit được giữ trên branch mới.

### Đã commit trên main (chưa push)

\`\`\`bash
git switch -c feature/my-feature
git switch main
git reset --hard HEAD~1
\`\`\`

Branch mới giữ commit; \`main\` trở lại trạng thái trước đó.

### Đã push lên shared branch

**Không tự ý reset + force push.** Dùng quy trình team (revert / hotfix PR).`,
      warning: `\`git reset --hard\` xóa uncommitted changes trên working tree. Chỉ dùng khi đã chắc chắn.`,
    },
    cursor: {
      steps: `1. **Source Control** → menu branch (status bar hoặc \`...\`).
2. **Create Branch...** → đặt tên \`feature/my-feature\`.
3. Stage + Commit trên branch mới.
4. Publish branch / Push.

Nếu đã commit trên main: tạo branch từ commit hiện tại, rồi checkout main và Reset (hard) về commit trước — chỉ khi chưa push.`,
    },
    desktop: {
      steps: `1. **Current Branch** → **New Branch...**
2. Đặt tên feature branch (tạo từ current HEAD).
3. Commit (nếu chưa) rồi **Publish branch**.
4. Nếu cần dọn main local: checkout \`main\` → History → Reset to previous commit (cẩn thận, chưa push).`,
    },
    fork: {
      steps: `1. **Branch → New Branch...**
2. Tạo \`feature/...\` từ HEAD hiện tại.
3. Commit + Push branch mới.
4. Quay lại \`main\` và reset nếu commit nhầm chưa được share.`,
    },
  },
  {
    id: "03",
    slug: "03-local-commits-and-remote-commits",
    title: "Local commits + remote commits cùng tồn tại",
    short: "Local + remote diverge",
    symptom: "Pull says branches have diverged",
    problem: `Remote có commit mới, local cũng có commit chưa push — hai nhánh đã **diverge**.

Ví dụ: 1 local commit cần push, 2 remote commits cần pull.

Git không đơn giản là "Pull → Push".`,
    gitState: `\`\`\`text
             C  ← local (1 commit ahead)
            /
A → B
            \\
             D → E  ← remote (2 commits ahead)
\`\`\``,
    shouldNot: `- Force push mù quáng lên shared branch.
- Chỉ bấm Sync mà không hiểu merge vs rebase.
- Bỏ qua conflict markers.`,
    takeaway: `Fetch trước → xem graph → chọn rebase (linear) hoặc merge → resolve → push (\`--force-with-lease\` nếu đã rebase branch đã publish).`,
    videos: {
      cli: "video/example-3.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `\`\`\`bash
git status
git fetch origin
git log --oneline --graph --all
git rebase origin/main
\`\`\`

Nếu conflict:

\`\`\`bash
git status
# sửa file →
git add .
git rebase --continue
git push
\`\`\`

Nếu branch đã push trước đó và rebase đổi history:

\`\`\`bash
git push --force-with-lease
\`\`\`

\`--force-with-lease\` an toàn hơn \`--force\` vì kiểm tra remote có bị thay đổi ngoài dự kiến.`,
      warning: `Tránh \`git push --force\` trên branch dùng chung. Ưu tiên \`--force-with-lease\`.`,
    },
    cursor: {
      steps: `1. Source Control → **Fetch**.
2. Khi diverge: không chỉ Sync — chọn **Pull (Rebase)** hoặc chạy rebase trong terminal.
3. Dùng **Merge Editor** nếu có conflict.
4. Push (\`force with lease\` nếu cần sau rebase).`,
    },
    desktop: {
      steps: `1. **Fetch origin**
2. So sánh History (local vs remote).
3. **Branch → Rebase current branch** (hoặc Merge tùy policy team).
4. Resolve conflicts trong editor.
5. Push (Desktop sẽ cảnh báo nếu cần force).`,
    },
    fork: {
      steps: `1. **Fetch**
2. Xem graph divergence.
3. **Rebase** lên \`origin/main\` (hoặc Merge).
4. Conflict Resolver → sửa → Continue.
5. Push (\`force-with-lease\` nếu đã rebase).`,
    },
  },
  {
    id: "04",
    slug: "04-discard-uncommitted-changes",
    title: "Bỏ changes chưa commit",
    short: "Bỏ changes chưa commit",
    symptom: "I want to remove my changes",
    problem: `Đang làm feature trên nhiều file nhưng càng sửa càng sai. Muốn bỏ changes của một số file (hoặc toàn bộ) và làm lại từ đầu — **chưa commit**.`,
    gitState: `Working tree / staging dirty:

\`\`\`text
Modified: file A, B, C
(staged hoặc unstaged)
\`\`\``,
    shouldNot: `- \`git restore .\` nếu còn thay đổi muốn giữ.
- Discard mà không xem diff trước.
- Nhầm discard với revert/reset commit đã tạo.`,
    takeaway: `\`git restore\` hoàn tác working tree về HEAD. Nếu chưa chắc → \`git stash\` an toàn hơn. Staged cần \`--staged\` rồi mới restore nội dung.`,
    videos: {
      cli: "video/example-4.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `Bỏ một file:

\`\`\`bash
git restore path/to/file
\`\`\`

Bỏ nhiều file:

\`\`\`bash
git restore file1 file2 file3
\`\`\`

Bỏ toàn bộ working tree:

\`\`\`bash
git restore .
\`\`\`

Đã staged — unstage rồi restore:

\`\`\`bash
git restore --staged file.txt
git restore file.txt
\`\`\`

An toàn hơn khi chưa chắc:

\`\`\`bash
git stash
\`\`\``,
      warning: `\`git restore\` / Discard có thể mất toàn bộ changes chưa commit — không khôi phục được trừ khi đã stash hoặc editor Local History.`,
    },
    cursor: {
      steps: `1. Source Control → chọn file → xem **diff**.
2. Click **Discard Changes** trên file (hoặc Discard All).
3. Một số extension hỗ trợ discard từng hunk.
4. Unstage: trừ staging rồi discard nếu cần.`,
    },
    desktop: {
      steps: `1. Tab **Changes** → chọn file → xem diff.
2. Right-click → **Discard changes**.
3. Hoặc discard toàn bộ changes trong changeset.`,
    },
    fork: {
      steps: `1. Working Directory → chọn file → xem diff.
2. **Discard** file / hunk (nếu hỗ trợ).
3. Xác nhận trước khi discard hàng loạt.`,
    },
  },
  {
    id: "05",
    slug: "05-amend-last-commit",
    title: "Commit thiếu file → thêm vào commit vừa tạo",
    short: "Amend commit thiếu file",
    symptom: "I forgot a file in my commit",
    problem: `Vừa commit (ví dụ \`feat: add product page\`) rồi mới nhớ quên update version / thiếu file. Commit **chưa push**. Không cần tạo commit thứ hai nếu policy team cho phép amend.`,
    gitState: `\`\`\`text
Before amend:  A → B (thiếu file)
After amend:   A → B' (cùng message, thêm file; hash đổi)
\`\`\``,
    shouldNot: `- Amend commit đã được người khác pull / đang dựa vào.
- Amend rồi force push lên \`main\` shared mà không theo quy trình.`,
    takeaway: `Amend thay thế commit cuối (đổi hash). Chỉ dùng khi commit còn local (hoặc branch riêng bạn kiểm soát).`,
    videos: {
      cli: "video/example-5.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `\`\`\`bash
# sửa file thiếu
git add package.json
git commit --amend --no-edit
\`\`\`

Đổi message:

\`\`\`bash
git commit --amend -m "feat: add product page"
\`\`\``,
      warning: `Không amend commit đã shared. Amend đổi hash → cần force-with-lease nếu đã push branch riêng.`,
    },
    cursor: {
      steps: `1. Sửa + **Stage** file thiếu.
2. Source Control → menu Commit → **Amend** / Commit (Amend).
3. Giữ hoặc sửa message.
4. Push với lease nếu branch đã publish.`,
    },
    desktop: {
      steps: `1. Stage thay đổi còn thiếu.
2. Bật **Amend previous commit** (checkbox gần Commit).
3. Commit.
4. Push (có thể yêu cầu force).`,
    },
    fork: {
      steps: `1. Stage file.
2. **Commit → Amend**.
3. Push (force-with-lease nếu cần).`,
    },
  },
  {
    id: "06",
    slug: "06-remove-files-from-git",
    title: "Lỡ commit file cần nằm trong .gitignore",
    short: "Lỡ commit .env / dump",
    symptom: "I committed .env",
    problem: `Lỡ commit \`.env\`, dump SQL, \`node_modules/\`, v.v. Đặc biệt nguy hiểm nếu \`.env\` chứa API key, password, token.`,
    gitState: `File đang được track trong index/history dù đã (hoặc chưa) có trong \`.gitignore\`.

\`.gitignore\` **không** gỡ file đã track và **không** xóa khỏi history đã push.`,
    shouldNot: `- Chỉ thêm \`.gitignore\` rồi nghĩ secret đã an toàn.
- Commit secret thật vào repo training/demo.
- Coi \`git rm --cached\` là đủ khi secret đã push công khai.`,
    takeaway: `Stop tracking bằng \`git rm --cached\` + \`.gitignore\`. Nếu đã push secret → **rotate/revoke ngay**, rồi mới clean history theo quy trình team.`,
    videos: {
      cli: "video/example-6.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `\`\`\`gitignore
.env
*.sql
node_modules/
\`\`\`

\`\`\`bash
git rm --cached .env
git add .gitignore
git commit -m "chore: ignore local environment files"
\`\`\`

File vẫn trên máy, Git không track nữa.

### Nếu đã push secret

1. Rotate / revoke secret ngay.
2. Remove khỏi branch hiện tại.
3. Clean history nếu cần (filter-repo / BFG) theo quy trình.
4. Force push theo approval.
5. Kiểm tra các clone khác.`,
      warning: `Xóa file khỏi branch **không** có nghĩa secret biến mất khỏi Git history. Phải rotate secret.`,
    },
    cursor: {
      steps: `1. Thêm pattern vào \`.gitignore\`.
2. Terminal: \`git rm --cached <file>\`.
3. Stage \`.gitignore\` + commit.
4. Nếu leaked: rotate secret ngoài Git trước.`,
    },
    desktop: {
      steps: `1. Sửa \`.gitignore\`.
2. Dùng repo shell / CLI để \`git rm --cached\` (Desktop không luôn expose đủ).
3. Commit thay đổi.
4. Xử lý secret leak theo checklist bảo mật.`,
    },
    fork: {
      steps: `1. Cập nhật \`.gitignore\`.
2. Untrack file (\`rm --cached\` qua terminal của Fork hoặc UI tương đương).
3. Commit.
4. Nếu đã push secret → rotate + clean history.`,
    },
  },
  {
    id: "07",
    slug: "07-go-back-to-old-commit",
    title: "Muốn quay lại commit cũ",
    short: "Quay lại commit cũ",
    symptom: "I want to go back to an old commit",
    problem: `History \`A → B → C\`. Sau khi test, \`C\` (hoặc \`B\`+\`C\`) lỗi nhiều. Muốn trở về trạng thái tốt ở \`A\`.`,
    gitState: `\`\`\`text
A (tốt) → B → C (lỗi)
\`\`\`

Hai hướng: **revert** (commit mới đảo ngược) vs **reset** (dời pointer).`,
    shouldNot: `- \`reset --hard\` + force push lên branch shared mà không có approval.
- Nhầm revert với reset.
- Reset khi còn uncommitted work cần giữ.`,
    takeaway: `Đã push/shared → ưu tiên \`git revert\`. Local chưa share → \`reset\` có thể phù hợp. Training: hiểu sự khác biệt history.`,
    videos: {
      cli: "video/example-7.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `### Revert (an toàn cho shared)

\`\`\`bash
git revert <commit-C>
git push
\`\`\`

### Reset (local / kiểm soát chặt)

\`\`\`bash
git reset --hard <commit-A>
# nếu đã push:
git push --force-with-lease
\`\`\`

| Tình huống | Nên dùng |
|---|---|
| Đã push/shared | \`revert\` |
| Local chưa push | \`reset\` có thể OK |
| Giữ history rõ | \`revert\` |
| Sửa local history | \`reset\` / rebase |`,
      warning: `\`git reset --hard\` có thể mất uncommitted changes. Force push có thể overwrite remote history.`,
    },
    cursor: {
      steps: `1. Git Graph / Timeline → chọn commit.
2. **Revert** (tạo commit mới) cho shared branch.
3. Hoặc Reset (hard/soft) chỉ khi hiểu hậu quả và chưa share / có approval.`,
    },
    desktop: {
      steps: `1. **History** → chọn commit.
2. **Revert this commit** (an toàn).
3. Reset chỉ dùng có chủ đích trên branch riêng.`,
    },
    fork: {
      steps: `1. Commit History → chọn commit.
2. **Revert** hoặc **Reset** tùy tình huống.
3. Push; dùng force-with-lease nếu reset đã publish.`,
    },
  },
  {
    id: "08",
    slug: "08-resolve-merge-conflict",
    title: "Merge Request / PR bị conflict",
    short: "PR / MR bị conflict",
    symptom: "PR has conflicts",
    problem: `Feature branch và \`main\` cùng sửa một file. PR/MR không merge được cho đến khi resolve conflict.`,
    gitState: `\`\`\`text
feature/login ──┐
                ├── CONFLICT trên cùng file
main (updated) ─┘
\`\`\``,
    shouldNot: `- Bấm "Accept Current/Incoming" mà không đọc business logic.
- Push --force lên main.
- Bỏ conflict markers (\`<<<<<<<\`) sót trong code.`,
    takeaway: `Fetch → rebase/merge \`main\` vào feature → sửa conflict có chủ đích → continue → test → push (\`force-with-lease\` nếu rebase).`,
    videos: {
      cli: "video/example-8.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `\`\`\`bash
git switch feature/login
git fetch origin
git rebase origin/main
git status
# sửa conflict markers
git add .
git rebase --continue
git push --force-with-lease
\`\`\`

Conflict markers:

\`\`\`text
<<<<<<< HEAD
code from main
=======
code from feature
>>>>>>> feature/login
\`\`\``,
      warning: `Sau rebase feature đã publish cần \`--force-with-lease\`, không force vào \`main\`.`,
    },
    cursor: {
      steps: `1. Pull/rebase \`main\` vào feature.
2. Mở **Merge Editor**: Current / Incoming / Result.
3. Chọn hoặc sửa thủ công — hiểu logic, không chỉ bấm Accept.
4. Stage → Continue rebase/merge → Push.`,
    },
    desktop: {
      steps: `1. Update from \`main\` (merge hoặc rebase theo setting).
2. Mở conflicted files.
3. Resolve → commit merge/rebase.
4. Push branch → PR xanh conflict.`,
    },
    fork: {
      steps: `1. Rebase/Merge \`main\` vào feature.
2. **Conflict Resolver**.
3. Sửa → Continue → Push.`,
    },
  },
  {
    id: "09",
    slug: "09-selectively-merge-features",
    title: "Chỉ merge một số feature từ dev sang main",
    short: "Merge chọn lọc (cherry-pick)",
    symptom: "I only want to merge some features",
    problem: `\`dev\` có nhiều feature (A, B, C, D) nhưng khách chỉ duyệt A và C. Không được merge cả \`dev\` → \`main\`.`,
    gitState: `\`\`\`text
main
  │
  └── dev
       ├── Feature A  ← lấy
       ├── Feature B
       ├── Feature C  ← lấy
       └── Feature D
\`\`\``,
    shouldNot: `- \`merge dev\` vào \`main\` khi chưa sẵn sàng mọi feature.
- Cherry-pick commit phụ thuộc mà bỏ commit nền.
- Coi cherry-pick là thay thế lâu dài cho feature branch độc lập.`,
    takeaway: `Ngắn hạn: \`cherry-pick\` các commit/feature đã duyệt. Dài hạn: mỗi feature một branch + PR riêng vào \`main\`.`,
    videos: {
      cli: "video/example-9.mp4",
      "cursor-vscode": null,
      "github-desktop": null,
      fork: null,
    },
    cli: {
      steps: `### Cách 1 — Cherry-pick

\`\`\`bash
git switch main
git pull origin main
git log dev --oneline
git cherry-pick aaa111   # Feature A
git cherry-pick ccc333   # Feature C
git push origin main
\`\`\`

### Cách 2 — Feature branch độc lập (khuyến nghị)

\`\`\`text
feature/A → PR → main
feature/C → PR → main
\`\`\`

Tránh nhồi mọi thứ vào một \`dev\` khổng lồ nếu thường xuyên release từng phần.`,
      warning: `Cherry-pick có thể conflict hoặc nhân đôi thay đổi nếu dependency commit không được pick đúng.`,
    },
    cursor: {
      steps: `1. Checkout \`main\`, pull.
2. Command Palette / Git Graph → **Cherry Pick** commit A, C.
3. Resolve nếu conflict → push.
4. Hoặc mở PR từ \`feature/A\`, \`feature/C\`.`,
    },
    desktop: {
      steps: `1. Checkout \`main\`.
2. History của \`dev\` → Cherry-pick commit cần thiết (nếu phiên bản hỗ trợ) hoặc dùng CLI.
3. Push \`main\` / tạo PR tương ứng.`,
    },
    fork: {
      steps: `1. Checkout \`main\`.
2. Chọn commit trên \`dev\` → **Cherry-pick**.
3. Lặp cho từng feature được duyệt → Push.`,
    },
  },
];

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.trimStart().replace(/^\uFEFF/, ""), "utf8");
}

function scenarioReadme(s) {
  const videoLines = tools
    .map((t) => {
      const v = s.videos[t];
      const label =
        t === "cli"
          ? "CLI"
          : t === "cursor-vscode"
            ? "Cursor / VS Code"
            : t === "github-desktop"
              ? "GitHub Desktop"
              : "Fork";
      return v
        ? `- **${label}:** [\`${v}\`](../../${v})`
        : `- **${label}:** _Chưa có video — thêm vào \`demo/videos/${s.id}-${t}.mp4\`_`;
    })
    .join("\n");

  return `# Scenario ${s.id} – ${s.title}

## Problem

${s.problem}

## What happened? (Git state)

${s.gitState}

## What should NOT do?

${s.shouldNot}

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

${videoLines}

## Key takeaway

${s.takeaway}

---

[← Tất cả scenarios](../../README.md#scenarios)
`;
}

function toolGuide(s, toolKey, title, body, equivalentCli) {
  const warning = body.warning
    ? `\n## ⚠️ Warning\n\n${body.warning}\n`
    : "";
  const note = body.note ? `\n## Ghi chú\n\n${body.note}\n` : "";
  const video = s.videos[toolKey];
  const videoSection = video
    ? `## Video\n\nDemo: [\`${video}\`](../../${video})\n`
    : `## Video\n\nĐặt file tại \`demo/videos/${s.id}-${toolKey}.mp4\` rồi cập nhật link trong web UI.\n`;

  return `# ${title} — Scenario ${s.id}

> ${s.title}

## Steps

${body.steps}
${warning}${note}
## Equivalent CLI

\`\`\`bash
${equivalentCli}
\`\`\`

${videoSection}
[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
`;
}

const cliHints = {
  "01": "git branch --show-current\ngit branch -a\ngit remote show origin\ngit branch -r --sort=-committerdate",
  "02": "git switch -c feature/my-feature\ngit add .\ngit commit -m \"...\"\ngit push -u origin feature/my-feature",
  "03": "git fetch origin\ngit rebase origin/main\ngit push --force-with-lease",
  "04": "git restore path/to/file\ngit restore --staged file.txt\ngit stash",
  "05": "git add package.json\ngit commit --amend --no-edit",
  "06": "git rm --cached .env\ngit add .gitignore\ngit commit -m \"chore: ignore local environment files\"",
  "07": "git revert <commit>\n# hoặc (local):\ngit reset --hard <commit>",
  "08": "git fetch origin\ngit rebase origin/main\n# resolve → git add . && git rebase --continue\ngit push --force-with-lease",
  "09": "git cherry-pick <commit-A>\ngit cherry-pick <commit-C>",
};

for (const s of scenarios) {
  const dir = path.join(scenariosDir, s.slug);
  write(path.join(dir, "README.md"), scenarioReadme(s));
  write(
    path.join(dir, "cli.md"),
    toolGuide(s, "cli", "CLI", s.cli, cliHints[s.id])
  );
  write(
    path.join(dir, "cursor-vscode.md"),
    toolGuide(s, "cursor-vscode", "Cursor / VS Code", s.cursor, cliHints[s.id])
  );
  write(
    path.join(dir, "github-desktop.md"),
    toolGuide(s, "github-desktop", "GitHub Desktop", s.desktop, cliHints[s.id])
  );
  write(
    path.join(dir, "fork.md"),
    toolGuide(s, "fork", "Fork", s.fork, cliHints[s.id])
  );
}

function guidePayload(body, commands) {
  return {
    steps: body.steps || "",
    commands,
    warning: body.warning || "",
    note: body.note || "",
  };
}

// Export manifest for web UI (includes per-tool steps + CLI commands)
const manifest = scenarios.map((s) => {
  const commands = cliHints[s.id] || "";
  return {
    id: s.id,
    slug: s.slug,
    title: s.title,
    short: s.short,
    symptom: s.symptom,
    videos: s.videos,
    takeaway: s.takeaway,
    guides: {
      cli: guidePayload(s.cli, commands),
      "cursor-vscode": guidePayload(s.cursor, commands),
      "github-desktop": guidePayload(s.desktop, commands),
      fork: guidePayload(s.fork, commands),
    },
  };
});

write(
  path.join(root, "web", "js", "scenarios-data.js"),
  `/* Auto-generated by scripts/build-scenarios.js — do not edit by hand */\nwindow.SCENARIOS = ${JSON.stringify(manifest, null, 2)};\n`
);

fs.writeFileSync(
  path.join(root, "scripts", "scenarios-manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
);

console.log(`Generated ${scenarios.length} scenarios × 5 files + web manifest.`);
