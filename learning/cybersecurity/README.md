# Barsul's Cybersecurity Learning Journey

A beginner-friendly, Android/Termux-based learning log. The course focuses on ethical, authorized cybersecurity practice.

## Learner
- Name used in examples: Barsul
- Device/workflow: Android phone with Termux; two Android phones may be used for authorized lab exercises
- Goal: Build foundational skills toward a cybersecurity career and help creators protect their accounts
- Learning style: Bengali explanations, one small step at a time, copy-and-paste commands, and clear instructions rather than frequent quizzes

## Progress

### Day 1 — Cybersecurity foundations
- What cybersecurity is
- White-hat, black-hat, and grey-hat hackers
- Permission and safe, ethical practice

### Day 2 — Networking foundations
- IP address
- DNS
- Default gateway/router

### Day 3 — Linux and Termux basics
- `pwd`, `ls`, `whoami`
- Creating folders and files with `mkdir`, `cd`, and `echo`
- Reading files with `cat`, `head`, and `tail`
- Counting lines/words with `wc`

### Python setup and early practice
- Installed Python in Termux (Python 3.14.10 at the time)
- Used `print()` and variables
- Created and ran `first.py` and `second.py`
- Practiced arithmetic in a calculator program

### Day 7 — Conditions
- `if` / `else`
- Comparison operator `>=`
- Indentation
- Practiced with `age = 15`

### Day 8 — `for` loops
- `range(1, 6)` prints 1 through 5
- The stop value in `range()` is excluded

### Day 9 — `while` loops
- Repeating while a condition remains true
- Updating a counter with `count = count + 1`
- Example condition: `count <= 5`

### Day 10 — Lists
- Creating lists with square brackets `[]`
- Adding items with `append()`
- Counting items with `len()`
- Accessing items by index; indexing starts at 0

### Day 11 — Dictionaries
- Creating dictionaries with braces `{}`
- Key/value pairs
- The key is before the colon; the value is after it

### Day 12 — Adding and updating dictionary entries
- A new key assignment adds a new entry
- Assigning to an existing key changes its value
- Example: `student["subject"] = "Linux"`

### Day 13 — Deleting dictionary entries
- Used `del student["subject"]`
- Confirmed that `del` removes both the key and its value

### Day 14 — Functions
- Defined a function with `def welcome():`
- Called the function more than once

### Day 15 — Function parameters
- Passed different names into `welcome(name)`
- Understood that the parameter receives the supplied value

### Day 16 — Return values
- Used `return` to send a result back from a function
- Example: `add(10, 20)`

### Day 17 — Function practice
- Created a subtraction function using `return a - b`
- Ran the program successfully

## Email security learning plan

Barsul wants practical, hands-on learning about sponsorship scams, phishing, malicious attachments, APK risks, and WhatsApp/account compromise, motivated in part by a past incident affecting a family member. The aim is defensive learning and helping creators stay safe.

Planned modules:
1. Email headers and sender investigation: From, Reply-To, Return-Path, SPF, DKIM, DMARC.
2. Images and tracking pixels: how remote images load and how to limit tracking.
3. Attachment security: PDF, ZIP, APK file identification and safe static analysis.
4. Download-link investigation: URL structure, redirects, domain reputation, and safe inspection.
5. Android APK and malware analysis: package contents, permissions, accessibility risks, indicators, and defenses.

Practical boundaries:
- Use owned devices, test accounts, and intentionally vulnerable training environments, or systems with explicit authorization.
- Safe simulations and analysis are appropriate.
- Do not steal real credentials, take over another person's account, deploy malware, or send deceptive harmful files to real people.
- For sponsorship exercises, use clearly fictional brands and transparent training messages. Do not impersonate real businesses or creators.

## Current practical lab

- Created `~/cyberlab/email_lab` in Termux.
- Created `sponsorship.txt` containing a fictional sponsorship email for training.
- A `link_test.py` example was provided to parse a harmless reserved `.invalid` demo URL, but the user has not yet confirmed running it.
- A fictional campaign concept was drafted for “Bengal Gadget House,” including a 20-item gadget catalogue and creator sponsorship terms. It is a training scenario, not a real company or offer.
- The fictional creator/channel scenario discussed was “Sabir Uddin Sheikh” / “mukya g”; do not treat these as verified facts or contact them. Any real-world test would require explicit authorization.

## Current checkpoint — paused

Barsul has paused lessons for now and wants to resume later. Start next time by briefly reminding him:
- Python Day 17 is complete.
- The Email Lab folder and fictional `sponsorship.txt` are in place.
- Next planned lesson is Module 1: inspect and understand email headers, starting with the sample header file `email_header.txt` (a command to create it was provided, but completion was not confirmed).
- Continue one small task at a time, in Bengali, with direct instructions and no unnecessary quizzes.

## Teaching preferences
- Explain in Bengali.
- Give one small task at a time; avoid overwhelming lists of commands.
- Prefer pasteable Termux commands using `cat > filename <<'EOF'`; Nano editing has been difficult.
- Use the name `Barsul` in examples.
- Explain what the task does and what output to expect.
- Wait for a screenshot or confirmation before giving the next step.
