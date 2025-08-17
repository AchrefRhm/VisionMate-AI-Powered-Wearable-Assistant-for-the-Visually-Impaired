# VisionMate – AI-Powered Wearable Assistant for the Visually Impaired
*Created with ❤️ by Achref Rhouma*

---

![VisionMate Banner](https://images.pexels.com/photos/6980526/pexels-photo-6980526.jpeg)

---

## 🚀 Overview
**VisionMate** is a cutting-edge wearable assistant designed to empower blind and visually impaired individuals with real-time spatial awareness. Using **YOLOv8 object detection**, monocular depth estimation, and offline voice feedback, VisionMate provides immediate audio and haptic feedback to navigate the world confidently. Fully self-contained on a **Raspberry Pi**, this device requires no internet or external computers after setup.

---

## ✨ Features

| Feature | Description | GIF/Visual |
|---------|-------------|------------|
| 📷 Object Detection | Detects people, doors, stairs, furniture, vehicles | ![Object Detection](https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg) |
| 📏 Depth Estimation | Monocular RGB-based distance measurements | ![Depth Estimation](https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg) |
| 📡 Ultrasonic Alerts | HC-SR04 sensor triggers vibration for nearby obstacles | ![Ultrasonic](https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg) |
| 🔊 Voice Feedback | On-device TTS announces objects and directions | ![Voice Feedback](https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg) |
| 🎛️ Tactile Buttons | Physical buttons for scene description & queries | ![Buttons](https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg) |
| 🌐 Offline Operation | Fully offline, no cloud dependency | ![Offline](https://images.pexels.com/photos/5077041/pexels-photo-5077041.jpeg) |

---

## 🛠️ Tech Stack

- **Raspberry Pi** – Core embedded system  
- **Python 3** – Control and AI integration  
- **YOLOv8** – Real-time object detection  
- **OpenCV** – Image capture & processing  
- **ML-Depth-Pro** – Monocular depth estimation  
- **HC-SR04 + Vibration Motor** – Proximity feedback  
- **pyttsx3 / Pico TTS** – Offline voice synthesis  
- **GPIO Buttons** – Physical user interface  

---

## 🌍 Why VisionMate?

Current navigation solutions are expensive, bulky, or limited in functionality. VisionMate is **low-cost, portable, and intelligent**, combining vision, depth awareness, and intuitive interaction into a single wearable device. It enables users to navigate daily spaces with confidence and independence.

![VisionMate in Action](https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg)

---

## 🚧 Roadmap

- ✅ **MVP:** Object detection + depth estimation + TTS + tactile buttons  
- 🔜 **Phase 2:** Voice-guided navigation for structured spaces  
- 🔮 **Phase 3:** Fully wearable vest/chest strap with modular sensors  
- 🔭 **Future:** Smart glasses & haptic wristband integration, expanded object training  

![Timeline](https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg)

---

## 💡 Creator Spotlight
**Achref Rhouma** – AI enthusiast & accessibility advocate  
- Passion for inclusive tech  
- Expert in embedded AI & computer vision  
- Always designing with empathy and human-centered principles  

![Creator Badge](https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg)

---

## 🎉 Demo / GIF Showcase
![VisionMate Demo](https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg)  
*See VisionMate detect objects, alert the user, and provide voice feedback in real time.*

---

## 🔗 GitHub
Check out the source code: [VisionMate Repository](https://github.com/AchrefRhm/VisionMate-AI-Powered-Wearable-Assistant-for-the-Visually-Impaired.git)

---

> ⚡ **Built with innovation and care by Achref Rhouma**, combining AI, accessibility, and human-centered design to make the world more navigable for everyone.
