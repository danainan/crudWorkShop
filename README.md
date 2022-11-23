# Clone Project
`npm install`



# Firebase Setting 

### [Go to Fibase](https://firebase.google.com/)

![pic1](https://user-images.githubusercontent.com/71175110/203569160-4ab280c2-88f5-42e2-9848-d878ca360e76.jpg)

-------------
> สร้าง Project


![pic2](https://user-images.githubusercontent.com/71175110/203569373-96ab7fdd-dd75-405e-a2fc-b6817ac708d9.jpg)

-------------

![pic3](https://user-images.githubusercontent.com/71175110/203569956-6b1d2d30-8e1b-4a6c-9038-17dab35da418.png)

-----------

![pic4](https://user-images.githubusercontent.com/71175110/203570803-f096b652-0a4b-4b61-8afb-d43abb2f7754.png)

------------
> เลือก Android

![pic5](https://user-images.githubusercontent.com/71175110/203571140-ae10f28d-542e-47d4-bb35-222bdb578630.jpg)

-------------
> Android package name สามารถดูได้จากดังภาพ หลังจากนั้น Register App

![pic6](https://user-images.githubusercontent.com/71175110/203571592-271b5b37-f726-4f67-96b1-f867976fb35d.jpg)

---------------

![pic7](https://user-images.githubusercontent.com/71175110/203573199-d16f1561-2b30-4690-ab48-0ea1927ce5f4.jpg)

---------------
> นำไฟล์ไปใส่ไว้ใน android > app > google-service.json

![pic8](https://user-images.githubusercontent.com/71175110/203573681-646cd8c7-1330-47c4-9600-f8874c68044a.jpg)

-------------

``` javascript 
เพิ่ม classpath 'com.google.gms:google-services:4.3.13'
ใน android > buil.gradle ไว้ในส่วนของ depencies ดังรูป
```
![pic9](https://user-images.githubusercontent.com/71175110/203575216-43add450-aa36-45ef-a2d7-cc8299fb52f3.jpg)

------------

``` javascript
เพิ่ม apply plugin : 'com.google.gms.google-services'
ใน android > app > build.gradle ไว้ส่วนบนสุด ดังรูป
```
![pic10](https://user-images.githubusercontent.com/71175110/203575627-ca38878f-57f5-436a-857f-2591309543f8.jpg)

-------------

``` javascript
เพิ่ม implementation platform('com.google.firebase:firebase-bom:31.1.0')
ใน android > app > build.gradle ไว้ในส่วนของ depencies ดังรูป
```
![pic11](https://user-images.githubusercontent.com/71175110/203575961-3ed40f10-77a7-48c1-9006-14ac9cdf928e.jpg)

--------------
> หลังจากนั้นกด Next และ Continue to Console

### สร้าง Firestore Database
![pic12](https://user-images.githubusercontent.com/71175110/203576358-4b22e943-a01f-4845-bcf6-786a35f76580.jpg)

------------

> เลือก Create database
![pic13](https://user-images.githubusercontent.com/71175110/203576759-dde32d60-2a1c-434c-9839-081727707a22.png)

------------

> เลือก location asia-southeast1 (Singapore)
![pic14](https://user-images.githubusercontent.com/71175110/203577063-4fd19190-bfba-4980-b8c0-6d9dfcfbebe2.jpg)

------------

> เลือก Start collection
![pic15](https://user-images.githubusercontent.com/71175110/203577239-812fa685-6c9c-48ec-b02f-539a7571f49f.jpg)

-------------

> ใส่ Collection id => users

--------------

> เลือก Auto-ID และใส่ข้อมูลดังรูปภาพ 
![pic16](https://user-images.githubusercontent.com/71175110/203577717-0882a2df-5e34-42f7-8161-b6c3ce115404.png)

--------------

> Run Project

`npx react-native run-android`


### Reference
> [How to Integrate Firebase in React Native Android and iOS App](https://aboutreact.com/integrate-firebase-in-android-and-ios-app/)

> [Integration of Firebase Cloud Firestore Database with React Native App](https://aboutreact.com/react-native-firebase-cloud-firestore-db/)

> [React Native Firebase](https://rnfirebase.io/)

> [How to use React Native with Firebase](https://www.youtube.com/watch?v=NFbMfVTtq10&list=LL&index=14)

