![banner](media/git_banner.png)

# WIP - Not Up To Date

# Old Readme

# Table of Contents

- [Introduction](https://github.com/radiotutor/radiotutor/#introduction)
	- [What is it?](https://github.com/radiotutor/radiotutor/#what-is-it)
	- [What can it do?](https://github.com/radiotutor/radiotutor/#what-can-it-do)
	- [What does it look like?](https://github.com/radiotutor/radiotutor/#what-does-it-look-like)
	- [Is it safe?](https://github.com/radiotutor/radiotutor/#is-it-safe)
- [Requirements](https://github.com/radiotutor/radiotutor/#requirements)
- [Roadmap](https://github.com/radiotutor/radiotutor/#roadmap)
- [Installation](https://github.com/radiotutor/radiotutor/#development-environment)

# Introduction

### What is it?
RadioTutor provides free, online mock tests to help students prepare for UK Amateur Radio exams.

[visit us](https://radiotutor.uk)

### What can it do?
- Generate mock tests for Foundation, Intermediate and Advanced Amateur Radio exams
- Acts as a training hub: linking to other training resources

### What does it look like?

#### Frontend
![frontend](media/Frontend.jpg)
#### Test Pages
![test](media/Testpage.JPG)
#### Test
![test](media/Test.JPG)
#### Results
![results](media/Results.JPG)


### Is it safe?
We strive to ensure that Radiotutor is as safe as possible. To do this, we use HTTPS as standard, and use industry standard methods to protect logins and user data.

# Requirements
Linux box. Ubuntu works well. For development, check out [Vagrant](https://www.vagrantup.com/)

# Roadmap

- ~~Mock Test Functionality~~
- ~~User Accounts~~
- New Quiz API
- Integration of 2019 syllabus questions
- Rework frontend
- Additional user account functionality
- Course Structure
- [Feature Requests](https://github.com/radiotutor/radiotutor/issues)


# Development Environment

Set upa  Gatsby development environment using the [Gatsby quick start guide](https://www.gatsbyjs.org/tutorial/part-zero/)

Clone our repo

```
git clone https://github.com/radiotutor/rt2
```

* Install dependancies

```
npm install
```

* Build site

```
gatsby develop
```

OR

```
gatsby build && gatsby serve
```


__That's It! Congratulations__
