# Git thực chiến – 9 tình huống thường gặp và cách xử lý

## 1. Mục tiêu của tài liệu

Mục tiêu của project không phải là giới thiệu Git command hay giới thiệu 4 phần mềm Git client.

Mục tiêu là xây dựng một **Git Troubleshooting & Training Repository** để thành viên trong team có thể:

- Gặp lỗi Git → tìm đúng tình huống → xem cách xử lý.
- Hiểu bản chất Git thay vì chỉ biết bấm nút.
- Thực hiện cùng một thao tác bằng nhiều phương pháp.
- Xem video demo thao tác thực tế.
- Có thể dùng repository này để training member mới.
- Có thể mở trực tiếp trên GitHub và đọc README mà không cần download project.

Các phương pháp được demo:

1. **Git CLI**
2. **Cursor / VS Code + Git extensions**
3. **GitHub Desktop**
4. **Fork**

> Lưu ý về license: GitHub Desktop hiện có bản tải cho Windows và macOS. Cursor có gói Hobby miễn phí nhưng bị giới hạn usage. Fork có bản dùng thử miễn phí nhưng license dài hạn hiện là $59.99, không phải phần mềm miễn phí hoàn toàn. Vì vậy README nên ghi chính xác là **"cross-platform Git tools with free/free-tier or evaluation options"** thay vì khẳng định cả 4 đều miễn phí.

---

# 2. Cấu trúc tổng thể của project

Repository nên được xây dựng theo hướng:

```text
git-training/
│
├── README.md
│
├── scenarios/
│   ├── 01-clone-and-find-working-branch/
│   │   ├── README.md
│   │   ├── cli.md
│   │   ├── cursor-vscode.md
│   │   ├── github-desktop.md
│   │   ├── fork.md
│   │   └── demo.mp4
│   │
│   ├── 02-create-branch-after-coding-on-main/
│   ├── 03-local-commits-and-remote-commits/
│   ├── 04-discard-uncommitted-changes/
│   ├── 05-amend-last-commit/
│   ├── 06-remove-files-from-git/
│   ├── 07-go-back-to-old-commit/
│   ├── 08-resolve-merge-conflict/
│   └── 09-selectively-merge-features/
│
├── demo/
│   ├── videos/
│   └── screenshots/
│
└── docs/
    ├── git-basics.md
    ├── branching-strategy.md
    ├── recovery.md
    └── glossary.md
```

Không nên chỉ có một README rất dài.

README chính đóng vai trò **index**.

Mỗi scenario phải là một bài độc lập, có:

```text
Problem
↓
What happened?
↓
What should NOT do?
↓
CLI
↓
Cursor / VS Code
↓
GitHub Desktop
↓
Fork
↓
Video
↓
Key takeaway
```

---

# 3. Bảng tổng quan các tình huống

| # | Tình huống | CLI | Cursor / VS Code | GitHub Desktop | Fork |
|---|---|---|---|---|---|
| 1 | Clone repo và xác định branch đang được code chính | ✅ | ✅ | ✅ | ✅ |
| 2 | Code trên `main` rồi mới phát hiện chưa tạo branch | ✅ | ✅ | ✅ | ✅ |
| 3 | Local commits + remote commits cùng tồn tại | ✅ | ✅ | ✅ | ✅ |
| 4 | Bỏ changes chưa commit | ✅ | ✅ | ✅ | ✅ |
| 5 | Commit thiếu file → thêm vào commit vừa tạo | `commit --amend` | ✅ | ✅ | ✅ |
| 6 | Lỡ commit `.env` / DB dump | `git rm --cached` | ✅ | ✅ | ✅ |
| 7 | Muốn quay lại commit cũ | `revert` / `reset` | ✅ | ✅ | ✅ |
| 8 | Merge Request bị conflict | merge/rebase | ✅ | ✅ | ✅ |
| 9 | Chỉ merge một số feature từ `dev` sang `main` | `cherry-pick` | ✅ | ✅ | ✅ |

Đây chính là bảng nên đưa lên web UI.

Người dùng click vào một dòng → mở trang scenario.

Người dùng click vào một cột → xem cách thực hiện bằng tool tương ứng.

---

# 4. Scenario 01 – Clone repository và xác định branch đang được code chính

## Tình huống

Developer clone repository về máy nhưng không biết:

- Hiện tại đang ở branch nào.
- Branch nào là branch chính.
- Team đang phát triển trên `main`, `dev`, `develop` hay một branch khác.
- Một branch có thể tồn tại lâu nhưng thực tế đã không còn được sử dụng.

Đây là một lỗi rất phổ biến:

> Clone repo → code ngay → sau vài ngày mới phát hiện đang code trên branch cũ.

---

## CLI

Kiểm tra branch hiện tại:

```bash
git branch --show-current
```

Hoặc:

```bash
git status
```

Xem tất cả branch:

```bash
git branch -a
```

Xem remote và branch mặc định:

```bash
git remote show origin
```

Xem các branch gần đây có hoạt động:

```bash
git branch -r --sort=-committerdate
```

Xem lịch sử tổng thể:

```bash
git log --all --decorate --oneline --graph
```

### Quan trọng

Không nên kết luận:

```text
branch có commit mới nhất = branch đang được team code chính
```

Cần kiểm tra thêm:

- Default branch trên GitHub.
- Pull Requests gần đây.
- Branch protection.
- CI/CD.
- Commit gần đây.
- README / documentation của project.
- Quy trình branching của team.

---

## Cursor / VS Code

Có thể kiểm tra branch hiện tại ngay trên status bar.

Hoặc mở Source Control.

Có thể mở integrated terminal:

```bash
git branch --show-current
```

Điểm đáng demo ở đây là:

> GUI giúp nhìn branch dễ hơn nhưng developer vẫn nên hiểu command tương ứng.

---

## GitHub Desktop

Demo:

1. Clone repository.
2. Nhìn Current Branch.
3. Mở branch dropdown.
4. Kiểm tra các branch local/remote.
5. Fetch origin.
6. So sánh lịch sử commit.

---

## Fork

Demo:

1. Clone repository.
2. Repository → Branches.
3. Kiểm tra branch hiện tại.
4. Kiểm tra commit history.
5. Fetch remote.
6. So sánh các branch.

---

## Video cần có

Video nên trả lời câu hỏi:

> "Tôi vừa clone một repo mà không biết nên code ở đâu. Tôi phải kiểm tra những gì trước khi bắt đầu?"

---

# 5. Scenario 02 – Code xong mới phát hiện đang ở `main`

## Tình huống

Developer đang ở:

```text
main
```

đã sửa code nhưng chưa commit.

Sau đó mới nhận ra:

> "À, đáng ra phải tạo branch trước."

Không cần panic và cũng không nhất thiết phải copy code sang nơi khác.

---

## CLI – trường hợp chưa commit

Kiểm tra:

```bash
git status
```

Tạo branch mới:

```bash
git switch -c feature/my-feature
```

Các changes chưa commit sẽ được giữ lại trên branch mới.

Sau đó:

```bash
git add .
git commit -m "Add my feature"
git push -u origin feature/my-feature
```

---

## Nếu đã commit trên `main`

Ví dụ:

```text
main
  A
  |
  B  ← accidental commit
```

Tạo branch tại commit hiện tại:

```bash
git switch -c feature/my-feature
```

Sau đó branch mới giữ commit đó.

Tuy nhiên `main` đã có commit không mong muốn.

Nếu commit chưa push:

```bash
git switch main
git reset --hard HEAD~1
```

Nếu đã push lên remote/shared branch:

**Không nên tự ý reset và force push.**

Cần xử lý theo quy trình của team.

---

## GUI

Cursor / VS Code:

```text
Source Control
→ Branch
→ Create Branch
```

GitHub Desktop:

```text
Current Branch
→ New Branch
```

Fork:

```text
Branch
→ New Branch
```

---

# 6. Scenario 03 – Local commits và remote commits cùng tồn tại

## Tình huống

Remote:

```text
A → B → C
```

Local:

```text
A → B → D
```

Developer có:

```text
1 local commit cần push
2 remote commits cần pull
```

Đây là một scenario cực kỳ quan trọng vì nó giúp giải thích:

> Git không đơn giản là "Pull → Push".

---

## Cách an toàn bằng CLI

Trước tiên:

```bash
git status
```

Fetch remote:

```bash
git fetch origin
```

Kiểm tra:

```bash
git log --oneline --graph --all
```

Rebase local commit lên remote:

```bash
git rebase origin/main
```

Nếu conflict:

```bash
git status
```

Sửa conflict →:

```bash
git add .
git rebase --continue
```

Sau khi hoàn tất:

```bash
git push
```

Nếu branch đã push trước đó và rebase làm thay đổi history:

```bash
git push --force-with-lease
```

`--force-with-lease` an toàn hơn `--force` vì Git kiểm tra remote có bị thay đổi ngoài dự kiến hay không.

---

## GUI

Trong Cursor / VS Code:

```text
Source Control
→ Pull / Sync
```

Nhưng khi xảy ra divergence, nên chuyển sang:

```text
Fetch
→ Rebase
→ Resolve conflicts
→ Push
```

GitHub Desktop và Fork cũng nên demo tương tự:

```text
Fetch
→ Compare history
→ Rebase / Merge
→ Resolve
→ Push
```

---

## Video nên đặc biệt demo

Không chỉ demo happy path.

Nên tạo repo có sẵn:

```text
Remote: 2 commits
Local: 1 commit
```

Sau đó cố tình Pull để người xem thấy Git báo lỗi.

Tiếp tục xử lý bằng cả 4 tool.

Đây sẽ là một video rất có giá trị training.

---

# 7. Scenario 04 – Muốn bỏ changes chưa commit

## Tình huống

Developer đang làm feature:

```text
file A
file B
file C
```

Nhưng càng sửa càng sai.

Muốn bỏ changes của một số file và làm lại từ đầu.

---

## Bỏ một file

```bash
git restore path/to/file
```

Ví dụ:

```bash
git restore src/components/Header.tsx
```

---

## Bỏ nhiều file

```bash
git restore file1 file2 file3
```

---

## Bỏ toàn bộ working tree changes

```bash
git restore .
```

### Cảnh báo

Lệnh này có thể làm mất toàn bộ changes chưa commit.

Nếu chưa chắc chắn:

```bash
git stash
```

sẽ an toàn hơn.

---

## Nếu changes đã staged

Unstage:

```bash
git restore --staged file.txt
```

Sau đó:

```bash
git restore file.txt
```

---

## GUI

Đây là một scenario rất tốt để demo visual difference:

```text
Modified
Staged
Unstaged
Discard changes
```

Trong GitHub Desktop/Fork/Cursor:

- Chọn file.
- Xem diff.
- Discard file.
- Hoặc discard từng hunk nếu tool hỗ trợ.

---

# 8. Scenario 05 – Commit thiếu file

## Tình huống

Developer vừa commit:

```text
feat: add product page
```

Sau đó mới nhớ:

```text
À, quên update version.
```

Commit chưa push.

Không cần tạo commit thứ hai.

---

## CLI

Sửa file:

```bash
vim package.json
```

Stage:

```bash
git add package.json
```

Amend commit:

```bash
git commit --amend --no-edit
```

Kết quả:

```text
Before:

A
|
B  feat: add product page
|
C  ← new commit

After:

A
|
B  feat: add product page
```

Commit B được thay thế bằng commit mới chứa cả changes.

---

## Nếu muốn đổi commit message

```bash
git commit --amend -m "feat: add product page"
```

---

## GUI

Cursor / VS Code:

```text
Stage file
→ Amend
→ Commit
```

GitHub Desktop:

```text
Commit changes
→ Amend previous commit
```

Fork:

```text
Commit
→ Amend
```

---

## Cảnh báo quan trọng

Không nên amend một commit đã được người khác pull xuống và đang làm việc dựa trên đó.

Amend làm thay đổi commit hash.

---

# 9. Scenario 06 – Lỡ commit file cần nằm trong `.gitignore`

## Tình huống

Developer lỡ commit:

```text
.env
database.sql
dump.sql
node_modules/
```

Đặc biệt nguy hiểm nếu `.env` chứa:

```text
API_KEY
DATABASE_PASSWORD
SECRET
TOKEN
```

---

## Bước 1 – thêm vào `.gitignore`

Ví dụ:

```gitignore
.env
*.sql
node_modules/
```

---

## Bước 2 – remove khỏi Git tracking

```bash
git rm --cached .env
```

Hoặc:

```bash
git rm --cached database.sql
```

Sau đó:

```bash
git add .gitignore
git commit -m "chore: ignore local environment files"
```

File vẫn tồn tại trên máy nhưng Git không track nữa.

---

## Nếu file đã push lên GitHub

Đây là điểm phải demo thật kỹ.

`.gitignore` **không xóa file khỏi Git history**.

Nếu `.env` chứa secret và đã push:

1. Rotate/revoke secret ngay.
2. Remove file khỏi branch.
3. Nếu cần, clean history.
4. Force push theo quy trình team.
5. Kiểm tra các clone khác.

Không được coi:

```bash
git rm --cached .env
```

là đủ để xử lý leaked secret.

---

# 10. Scenario 07 – Muốn quay lại commit cũ

## Tình huống

History:

```text
A → B → C
```

Trong đó:

```text
A = version tốt
B = feature 1
C = feature 2
```

Sau khi test C phát hiện rất nhiều lỗi.

Muốn quay lại trạng thái A.

---

## Có hai khái niệm cần phân biệt

### `git revert`

Tạo commit mới để đảo ngược thay đổi.

```text
A → B → C → D
             ↑
          revert C
```

Đây thường là cách an toàn cho branch đã push/shared.

Ví dụ:

```bash
git revert C
git push
```

---

### `git reset`

Di chuyển branch pointer về commit cũ.

```bash
git reset --hard A
```

History local trở thành:

```text
A
```

Nhưng nếu branch đã push:

```bash
git push --force-with-lease
```

Cần cực kỳ cẩn thận.

---

## Quy tắc training nên ghi nhớ

| Tình huống | Nên dùng |
|---|---|
| Commit đã push/shared | `revert` |
| Commit local chưa push | `reset` có thể phù hợp |
| Muốn giữ history rõ ràng | `revert` |
| Muốn sửa lại local history | `reset` / rebase |

Đây là một trong những điểm quan trọng nhất của toàn bộ training.

---

# 11. Scenario 08 – Merge Request bị conflict

## Tình huống

Developer tạo:

```text
feature/login
```

Trong khi `main` tiếp tục thay đổi cùng file.

Kết quả:

```text
feature/login
       ↓
      PR
       ↓
main
       ↓
CONFLICT
```

---

## CLI

Checkout feature:

```bash
git switch feature/login
```

Fetch:

```bash
git fetch origin
```

Rebase:

```bash
git rebase origin/main
```

Git báo conflict.

Kiểm tra:

```bash
git status
```

Sửa file:

```text
<<<<<<< HEAD
code from main
=======
code from feature
>>>>>>> feature/login
```

Sau khi sửa:

```bash
git add .
git rebase --continue
```

Lặp lại nếu có nhiều conflict.

Cuối cùng:

```bash
git push --force-with-lease
```

---

## GUI

Đây là scenario rất nên quay video bằng GUI vì dễ nhìn:

```text
Current change
Incoming change
Conflict
Accept Current
Accept Incoming
Accept Both
Compare
```

Nhưng phải giải thích:

> Button "Accept Current" không có nghĩa là "đây luôn là code đúng".

Developer vẫn phải hiểu business logic để quyết định giữ code nào.

---

# 12. Scenario 09 – `dev` có nhiều feature nhưng `main` chỉ được merge một số feature

## Tình huống

Có:

```text
main
  │
  └── dev
       ├── Feature A
       ├── Feature B
       ├── Feature C
       └── Feature D
```

Khách hàng chỉ duyệt:

```text
Feature A
Feature C
```

Không được đưa B và D vào production.

Không nên:

```text
merge dev → main
```

vì sẽ lấy tất cả feature.

---

# Cách 1 – Cherry-pick

Nếu các feature nằm trong các commit riêng biệt:

```bash
git switch main
git pull origin main
```

Tìm commit:

```bash
git log dev --oneline
```

Ví dụ:

```text
aaa111 Feature A
bbb222 Feature B
ccc333 Feature C
ddd444 Feature D
```

Cherry-pick:

```bash
git cherry-pick aaa111
git cherry-pick ccc333
```

Sau đó:

```bash
git push origin main
```

Kết quả:

```text
main
 ├── Feature A
 └── Feature C
```

---

# Cách 2 – Merge từng feature branch

Đây mới là workflow tốt hơn về lâu dài.

Thay vì:

```text
dev
 ├── A
 ├── B
 ├── C
 └── D
```

nên:

```text
main
 │
 ├── feature/A
 ├── feature/B
 ├── feature/C
 └── feature/D
```

Sau đó:

```text
feature/A → PR → main
feature/C → PR → main
```

Như vậy việc chọn feature rất dễ dàng.

---

# 13. Kiến trúc branching nên dùng trong training

Có thể demo một repository với:

```text
main
 │
 └── dev
      │
      ├── feature/login
      ├── feature/payment
      ├── feature/product
      └── feature/report
```

Nhưng trong README phải giải thích:

> `dev` không nên trở thành nơi chứa một đống feature không thể tách biệt.

Nếu team thường xuyên cần release từng feature riêng lẻ, nên tổ chức feature branch độc lập.

Ví dụ:

```text
main
│
├── feature/A
├── feature/B
├── feature/C
└── feature/D
```

sẽ dễ quản lý PR/review/release hơn.

---

# 14. Ma trận demo 4 công cụ

Đây là phần nên xuất hiện trực tiếp trên web.

| Scenario | CLI | Cursor / VS Code | GitHub Desktop | Fork |
|---|---|---|---|---|
| Clone | Terminal | Clone Repository | Clone Repository | Clone Repository |
| Branch | `git switch -c` | Branch menu | New Branch | New Branch |
| Pull | `git pull` | Pull | Pull Origin | Pull |
| Fetch | `git fetch` | Fetch | Fetch | Fetch |
| Rebase | `git rebase` | Rebase | Rebase | Rebase |
| Commit | `git commit` | Source Control | Commit | Commit |
| Amend | `git commit --amend` | Amend | Amend | Amend |
| Discard | `git restore` | Discard | Discard | Discard |
| Cherry-pick | `git cherry-pick` | Command Palette / Git UI | Cherry-pick | Cherry-pick |
| Revert | `git revert` | Revert | Revert | Revert |
| Conflict | Terminal/editor | Merge Editor | Conflict UI | Conflict Resolver |
| History | `git log` | Timeline / Git Graph | History | Commit History |

Fork có sẵn các tính năng như branch, fetch/pull/push, cherry-pick, revert, merge, rebase, stash, interactive rebase và conflict resolution, nên rất phù hợp để làm công cụ GUI thứ tư trong bài demo.

---

# 15. Cách xây dựng Demo Repository

Đây là phần quan trọng nhất của project.

Không nên lấy một project production thật rồi cố tình phá.

Nên tạo một repository riêng:

```text
git-training-lab
```

Repository này được thiết kế để **cố tình tạo lỗi Git**.

Ví dụ:

```text
main
│
├── dev
│
├── scenario/01
├── scenario/02
├── scenario/03
...
```

Mỗi scenario có trạng thái Git được chuẩn bị trước.

---

# 16. Ví dụ setup Scenario 03

Tạo remote:

```text
A → B
```

Clone về máy.

Tạo local commit:

```text
A → B → C
```

Ở remote tạo thêm:

```text
A → B → D → E
```

Kết quả:

```text
             C  ← local
            /
A → B
            \
             D → E  ← remote
```

Bây giờ video bắt đầu.

Developer chạy:

```bash
git pull
```

và gặp vấn đề.

Sau đó hướng dẫn:

```bash
git fetch origin
git rebase origin/main
git push --force-with-lease
```

Sau khi hoàn thành:

```text
A → B → D → E → C
```

Người xem sẽ hiểu **tại sao** phải rebase chứ không chỉ nhớ một câu lệnh.

---

# 17. Video phải được quay như thế nào?

Mỗi scenario nên có 4 video:

```text
01-cli.mp4
02-cursor-vscode.mp4
03-github-desktop.mp4
04-fork.mp4
```

Nhưng không nhất thiết tất cả video đều dài.

Mục tiêu:

```text
Problem
→ Check state
→ Fix
→ Verify result
```

Ví dụ Scenario 05:

```text
00:00 – Tình huống
00:20 – git status
00:30 – commit thiếu file
00:50 – sửa file
01:00 – git add
01:10 – git commit --amend
01:30 – kiểm tra git log
```

Video 1–3 phút sẽ có giá trị training hơn một video 20 phút nói lý thuyết.

---

# 18. Không nên chỉ quay "happy path"

Ví dụ Scenario 08 conflict.

Không nên quay:

```text
Click Resolve
→ Done
```

Nên cố tình tạo:

```text
Conflict
↓
Open conflict
↓
Understand Current / Incoming
↓
Fix manually
↓
Stage
↓
Continue
↓
Test
↓
Push
```

Tương tự Scenario 03:

```text
Pull
↓
Conflict/diverged
↓
Understand why
↓
Fetch
↓
Rebase
↓
Resolve
↓
Push
```

Đây mới là phần chứng minh người làm **thực sự hiểu Git**.

---

# 19. Web UI nên thiết kế như thế nào?

Trang chủ nên có một bảng tương tự:

| Situation | CLI | Cursor / VS Code | GitHub Desktop | Fork |
|---|---|---|---|---|
| Clone & identify branch | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Created code on main | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Local + remote commits | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Discard changes | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Amend commit | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Remove ignored file | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Go back to old commit | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Merge conflict | ▶ Video | ▶ Video | ▶ Video | ▶ Video |
| Selective merge | ▶ Video | ▶ Video | ▶ Video | ▶ Video |

Click vào:

```text
Scenario
```

→ mở explanation.

Click:

```text
CLI
```

→ mở CLI guide + video.

Click:

```text
Fork
```

→ mở Fork guide + video.

---

# 20. Mỗi scenario trên web nên có format cố định

Ví dụ:

```text
┌─────────────────────────────────────┐
│ Scenario 03                         │
│ Local commits + Remote commits      │
├─────────────────────────────────────┤
│ Problem                             │
│ Local has 1 commit                  │
│ Remote has 2 commits                │
├─────────────────────────────────────┤
│ Git state                           │
│ Local:  A → B → C                   │
│ Remote: A → B → D → E               │
├─────────────────────────────────────┤
│ Choose your tool                    │
│                                     │
│ [ CLI ] [ Cursor ] [ Desktop ] [Fork]│
├─────────────────────────────────────┤
│                                     │
│        ▶ Watch Demo                 │
│                                     │
├─────────────────────────────────────┤
│ Commands                             │
│ git fetch origin                     │
│ git rebase origin/main               │
│ git push --force-with-lease          │
└─────────────────────────────────────┘
```

---

# 21. README phải là trung tâm của project

README không nên chỉ viết:

```text
# Git Training
This project teaches Git.
```

Nó nên có:

```text
# Git Troubleshooting Lab

## Overview

Interactive Git training repository covering common
real-world Git problems.

## Tools

- Git CLI
- Cursor / VS Code
- GitHub Desktop
- Fork

## Scenarios

1. Clone and identify working branch
2. Create branch after coding on main
3. Local commits + remote commits
4. Discard uncommitted changes
5. Amend last commit
6. Remove accidentally tracked files
7. Return to an old commit
8. Resolve merge conflicts
9. Selectively merge features

## Quick Navigation

| Scenario | Description |
|---|---|
| 01 | Branch discovery |
| 02 | Wrong branch |
| 03 | Diverged branches |
...
```

Sau đó link tới:

```text
/scenarios/01...
/scenarios/02...
```

---

# 22. README phải giúp người mới tra cứu nhanh

Một người gặp lỗi:

> "Git pull không được."

Không nên bắt họ đọc toàn bộ README.

README nên có:

```text
I have a problem
│
├── I don't know which branch to use
│   → Scenario 01
│
├── I accidentally coded on main
│   → Scenario 02
│
├── Pull says branches have diverged
│   → Scenario 03
│
├── I want to remove my changes
│   → Scenario 04
│
├── I forgot a file in my commit
│   → Scenario 05
│
├── I committed .env
│   → Scenario 06
│
├── I want to go back to an old commit
│   → Scenario 07
│
├── PR has conflicts
│   → Scenario 08
│
└── I only want to merge some features
    → Scenario 09
```

Đây sẽ biến repo thành **Git troubleshooting handbook** thay vì một bài assignment.

---

# 23. Một nguyên tắc cực kỳ quan trọng: CLI là nền tảng

Dù demo bằng:

- Cursor
- VS Code
- GitHub Desktop
- Fork

thì mỗi scenario vẫn phải có:

```text
What Git is doing
```

và:

```text
Equivalent CLI command
```

Ví dụ:

```text
GUI:
Create Branch

Equivalent CLI:

git switch -c feature/login
```

Hoặc:

```text
GUI:
Discard Changes

Equivalent CLI:

git restore file.txt
```

Điều này giúp tránh tình trạng:

> "Biết bấm GitHub Desktop nhưng không hiểu Git."

---

# 24. Những lỗi nguy hiểm cần có cảnh báo màu đỏ

Trong web UI nên có Warning Box.

Ví dụ:

### ⚠️ `git reset --hard`

Có thể mất uncommitted changes.

---

### ⚠️ `git push --force`

Có thể overwrite remote history.

Ưu tiên:

```bash
git push --force-with-lease
```

---

### ⚠️ `.env` đã push lên GitHub

Xóa file khỏi branch **không có nghĩa secret đã biến mất khỏi Git history**.

Secret cần được rotate/revoke.

---

### ⚠️ `git commit --amend`

Không nên amend commit đã được người khác sử dụng.

---

### ⚠️ `git cherry-pick`

Có thể gây conflict hoặc duplicate changes nếu commit dependencies không được xử lý đúng.

---

# 25. Checklist nghiệm thu project

## Repository

- [ ] Có README đầy đủ.
- [ ] Có 9 scenarios.
- [ ] Mỗi scenario có problem description.
- [ ] Mỗi scenario có expected Git state.
- [ ] Mỗi scenario có CLI solution.
- [ ] Mỗi scenario có Cursor/VS Code solution.
- [ ] Mỗi scenario có GitHub Desktop solution.
- [ ] Mỗi scenario có Fork solution.
- [ ] Có command/reference.
- [ ] Có warning cho các command nguy hiểm.

## Demo

- [ ] Có video CLI.
- [ ] Có video Cursor/VS Code.
- [ ] Có video GitHub Desktop.
- [ ] Có video Fork.
- [ ] Video thể hiện trạng thái trước khi fix.
- [ ] Video thể hiện thao tác fix.
- [ ] Video kiểm tra kết quả sau khi fix.
- [ ] Không chỉ quay happy path.
- [ ] Không sử dụng dữ liệu production/secret thật.

## Web

- [ ] Có trang overview.
- [ ] Có bảng comparison.
- [ ] Có filter/search scenario.
- [ ] Có nút xem video.
- [ ] Có nút xem CLI.
- [ ] Có nút xem GUI.
- [ ] Responsive.
- [ ] Có trạng thái Completed / Not completed.
- [ ] Có link tới GitHub repository.
- [ ] README và web UI dùng cùng terminology.

---

# 26. Cách chia task để thực hiện project

Không nên bắt đầu bằng việc code web UI.

Nên làm theo thứ tự:

### Phase 1 – Git knowledge

```text
01 → 09
```

Viết và kiểm chứng từng scenario bằng CLI trước.

### Phase 2 – GUI validation

Mỗi scenario thực hiện lại bằng:

```text
Cursor / VS Code
GitHub Desktop
Fork
```

### Phase 3 – Video

Mỗi scenario tạo video.

### Phase 4 – Repository

Đưa:

```text
README
Markdown
Screenshots
Videos
```

vào GitHub.

### Phase 5 – Web UI

Sau khi nội dung đã ổn định mới build web.

### Phase 6 – Final validation

Một người khác clone repo và thử làm theo README.

Nếu họ có thể tự xử lý được mà không cần hỏi người viết:

> Project đạt mục tiêu.

---

# 27. Definition of Done

Project chỉ nên được coi là hoàn thành khi một developer mới có thể:

```text
Clone repository
       ↓
Mở README
       ↓
Chọn vấn đề đang gặp
       ↓
Đọc tình huống
       ↓
Chọn CLI / Cursor / GitHub Desktop / Fork
       ↓
Xem video
       ↓
Làm lại trên Git training repo
       ↓
Kiểm tra kết quả
```

và quan trọng nhất:

> **Không chỉ biết "bấm nút nào", mà hiểu Git đang thay đổi history/branch/working tree như thế nào.**

---

# 28. Đề xuất tên project

Một số tên phù hợp:

### `git-troubleshooting-lab`

Rõ mục đích và phù hợp để training.

### `git-real-world-scenarios`

Nhấn mạnh các tình huống thực tế.

### `git-practical-guide`

Phù hợp nếu muốn mở rộng thêm nhiều scenario.

### `git-training-lab`

Ngắn gọn và dễ dùng nhất cho team.

Mình ưu tiên:

```text
git-troubleshooting-lab
```

vì sau này có thể mở rộng từ 9 scenario lên:

```text
10. Stash
11. Reflog – recover lost commit
12. Interactive rebase
13. Squash commits
14. Wrong commit pushed
15. Detached HEAD
16. Delete remote branch
17. Rename branch
18. Submodule problem
19. Git LFS
20. Accidentally deleted branch
```

---

# 29. Kết luận

Điểm giá trị nhất của bài này **không phải là so sánh 4 phần mềm**.

4 phần mềm chỉ là 4 "giao diện" để giải quyết cùng một vấn đề.

Cấu trúc đúng nên là:

```text
                 REAL-WORLD PROBLEM
                         │
                         ▼
                 UNDERSTAND GIT STATE
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
        CLI          GUI tools       Git concepts
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                     FIX IT
                         │
                         ▼
                    VERIFY RESULT
                         │
                         ▼
                     VIDEO DEMO
                         │
                         ▼
                  TRAINING REPOSITORY
```

Nếu làm đúng hướng này, sản phẩm cuối cùng sẽ không còn là **"bài thuyết trình về Git"**, mà trở thành một **Git knowledge base + troubleshooting lab + training material** mà team có thể dùng lại cho developer/tester mới sau này.

Đặc biệt, nên ưu tiên **xây repo + kiểm chứng 9 scenario + quay video trước**, sau đó mới build web UI. Như vậy web chỉ là lớp giao diện để truy cập knowledge base, còn giá trị thật nằm trong Git repository và các demo có thể tái hiện được.