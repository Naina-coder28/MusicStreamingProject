# Music Streaming Web Application 
This is a web-based music streaming application developed using HTML, CSS, and JavaScript, with an additional Java + JDBC module to demonstrate OOP concepts, database connectivity, and backend structure.

# Features Implemented (Core Requirements)
Play, Pause, Next, Previous controls
Click song from playlist to play
Dynamic progress bar with seek functionality
Song cover image display
Playlist of 10 songs
Efficient event handling using JavaScript
Error handling for audio load failures
Clean UI and smooth user interaction 

# Java (OOP + JDBC Module)
A separate Java folder demonstrates backend concepts:

# JavaJDBCExample
Contains:
 **DatabaseConnection.java** – JDBC MySQL connection  
 **Song.java** – OOP model class  
 **SongDAO.java** – Data Access Object  
 **Main.java** – Test runner class  

This module satisfies Review-2 requirements:
Object-Oriented Programming (OOP)
JDBC connectivity
Database operations (simulation / demonstration) 

## 📂 **Project Structure**
MusicStreamingProject
│── index.html
│── style.css
│── script.js
│── bg.jpg
│── logo.png
│── playing.gif
│
├── covers/
│ ├── 1.jpg ... 10.jpg
│
├── songs/
│ ├── 1.mp3 ... 10.mp3
│
└── JavaJDBCExample/
├── DatabaseConnection.java
├── Song.java
├── SongDAO.java
└── Main.java

## **Technologies Used**
- HTML  
- CSS  
- JavaScript  
- Java  
- JDBC (MySQL)  
- GitHub  

##  **Data Validation & Error Handling**
- Validates audio file availability  
- Handles missing file errors  
- Prevents script from crashing  
- Ensures event listeners run safely
- 
##  **How to Run**

# **Web Project:**
1. Download the project  
2. Extract ZIP  
3. Double-click **index.html**  
4. Music player will open in the browser  

# **Java Module:**
1. Import `JavaJDBCExample` folder in any IDE  
2. Run **Main.java**  
3.Database connection message will be displayed 

# **Future Enhancements**
- Search bar  
- Playlist save feature  
- Volume control  
- Backend integration  
- User authentication system  



