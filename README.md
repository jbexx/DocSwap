# DocSwap
Optical Character Recognition Integrating Language Translation


### WireFrames

<img width="762" alt="screen shot 2017-09-08 at 10 38 10" src="https://user-images.githubusercontent.com/23174736/30221801-ee26c350-9481-11e7-917a-5d13cc9b41eb.png">


### Summary
   The Idea for this app came from my interaction with newly arriving refugee families to the U.S.  One of the struggles they face is reading documentation they recieve through mail; whether bills, court documents or financial assitance documents, they struggle to read and understand them.

   This is a Mobile App built in React-Native that implements the Camera functionality to allow the user to take a picture of a document.  It is then posted to the Google Cloud Vision API where the Optical Character Recognition functionality of the API is used to read the document and returns the text of that document.

   The user can then select a language they wish to translate the document into.  Another post is made to the Google Cloud Translation API where it is translated and returned to be displayed to the user.

### Use
- Clone this repo and run 
    ```
    npm install
    ```
- you will need to have xcode installed on your machine or some other simulator to run the app

    to download xcode go to [this page](https://developer.apple.com/xcode/downloads/)
    you will need to login with your Apple ID and Password
    once you have this installed, then in your terminal run
    ```
    react-native start
    ```

- then run...
    ```
    react-native run-ios
    ```
    ...and this will open your simulator and run the app in it

###### Theoretically this is a cross platform app, though it has not been tested on an Android machine

### Screenshots


