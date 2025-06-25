import React, { useState } from "react";

const heroes = [
  { name: "Airi", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/fb8a12b0dccdaee733cb0df7479245a4538231199.jpeg", description: "มือสังหารผู้ว่องไว เชี่ยวชาญโจมตีเร็วและหลบหลีกแม่นยำ" },
  { name: "Aleister", role: "Mage", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/865b1b90b0a5c0c961bf6e56beb47e2b368550319.jpg", description: "จอมเวทควบคุมศัตรูด้วยพลังเวทมนตร์สายฟ้า" },
  { name: "Alice", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301180.png", description: "ซัพพอร์ตควบคุมฝ่ายตรงข้ามให้เคลื่อนที่ลำบาก" },
  { name: "Allain", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/0c8dc05e988fbd87b5d30b368b8008ec.jpg", description: "นักดาบแห่งแสง ว่องไวและทำลายสูง" },
  { name: "Amily", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301930.png", description: "นักสู้ประชิดตัว รวดเร็วและดุดัน" },
  { name: "Annette", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305190.png", description: "นักเวทซัพพอร์ต ปั่นป่วนศัตรูและเสริมพลังทีม" },
  { name: "Aoi", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/210fedabab9858d9a86a36a0e22fd0c2911013802.jpeg", description: "มือสังหารสาว เคลื่อนที่รวดเร็วเหมือนสายลม" },
  { name: "Arduin", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301260.png", description: "แทงค์แนวหน้า ทนทานและควบคุมศัตรู" },
  { name: "Arum", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301870.png", description: "ผู้เรียกสัตว์ป่า สะกดศัตรูและเสริมพลังทีม" },
  { name: "Astrid", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305020.png", description: "นักรบหญิงแข็งแกร่ง พร้อมดาบใหญ่ในมือ" },
  { name: "Ata", role: "Tank", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/bc077a5ecf509b309fc06fbbae34d4a7.jpg", description: "แทงค์สายบุก ดุดันและควบคุมศัตรู" },
  { name: "Aya", role: "Support", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/d7eb3abf05ebf7c588efcd1c4426b6ea928761324.jpg", description: "นางฟ้าซัพพอร์ตทีมและหลบหลีกอันตราย" },
  { name: "Azzen'Ka", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301270.png", description: "จอมเวทสายทราย กักขังศัตรูให้อยู่กับที่" },
  { name: "Baldum", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305050.png", description: "นักรบป่า แทงค์ผู้คุมสนามรบ" },
  { name: "Bright", role: "Carry", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/1df9f95f158eb4bf8e3b86bc1a852220.jpg", description: "มือปืนแห่งแสง บุกทำลายศัตรูระยะไกล" },
  { name: "Butterfly", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/953686dacc7e2900a7c3e557f9a289a0804234356.jpeg", description: "มือสังหารสาวโหดเหี้ยม ทุกสมรภูมิ" },
  { name: "Capheny", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305240.png", description: "มือปืนสาว ยิงต่อเนื่องด้วยปืนกลหนัก" },
  { name: "Celica", role: "Carry", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/977f2da94839af7212b8071b2d4e25aa.jpg", description: "มือปืนสายบุก ยิงทำลายแนวหลัง" },
  { name: "Chaugnar", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301130.png", description: "เทพโบราณ ช่วยล้างสถานะและป้องกันทีม" },
  { name: "Cresht", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301710.png", description: "แทงค์กบยักษ์ เปลี่ยนร่างเสริมพลังมหาศาล" },
  { name: "D'Arcy", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305230.png", description: "นักเวทมิติ ควบคุมพื้นที่และทำลายศัตรู" },
  { name: "Dextra", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/ecefc7e37ee6ebd911f20cb85e3cf114.jpg", description: "นักดาบแทงค์ ฟื้นฟูเลือดและบุกทะลวง" },
  { name: "Diao chan", role: "Mage", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/2739ce8e4cba10bbbf586d9305c0bc6d278501387.png", description: "นักเวทน้ำแข็ง ทำลายล้างด้วยเวทเย็น" },
  { name: "Dirak", role: "Mage", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/5a0aa13473e99882dd2bc386e65a757a.jpg", description: "จอมเวทพลังแสง สร้างเกราะและโจมตีระยะไกล" },
  { name: "Eland'orr", role: "Carry", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/44644fdbed6c3d262d8d99d72fc88abd.jpg", description: "นักธนูคล่องตัว ยิงโจมตีระยะไกล" },
  { name: "Elsu", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301960.png", description: "มือปืนซุ่มยิง ระยะไกลแม่นยำสูง" },
  { name: "Enzo", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/52082f355647d254c4b45a6eab022ef0194524062.jpeg", description: "นักฆ่าหนุ่ม เคลื่อนที่เร็วและดาเมจแรง" },
  { name: "Errol", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/9533ebf490c391b2db65bf079b4bf749.jpg", description: "นักสู้กลายพันธุ์ แข็งแกร่งและฟื้นตัวไว" },
  { name: "Fennik", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301730.png", description: "นักธนูจิ้งจอก ว่องไวและแม่นยำ" },
  { name: "Florentino", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305210.png", description: "นักดาบสง่างาม เชี่ยวชาญดาบคู่" },
  { name: "Gildur", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301080.png", description: "จอมเวททองคำ สร้างความเสียหายและควบคุม" },
  { name: "Grakk", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301750.png", description: "แทงค์ยักษ์สายบุก ทนทานและควบคุมศัตรู" },
  { name: "Hayate", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301320.png", description: "มือสังหารรวดเร็ว มีทักษะหลบหลีกสูง" },
  { name: "IGGY", role: "Mage", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/76c762a4ceee074fe4459a483350dbe4258081001.jpeg", description: "จอมเวทสายไฟ ใช้ระเบิดและกับดักโจมตี" },
  { name: "Ignis", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301240.png", description: "จอมเวทไฟ ควบคุมเปลวเพลิงทำลายล้าง" },
  { name: "Illumia", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301360.png", description: "จอมเวทแสง สร้างความเสียหายและฟื้นฟูทีม" },
  { name: "Ishar", role: "Mage", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/38234f18a68b8d881c3c40824e10482a.jpg", description: "นักเวทลม ใช้พลังลมโจมตีและหลบหลีก" },
  { name: "Jinna", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301150.png", description: "ซัพพอร์ตสายเวท เสริมพลังและควบคุมศัตรู" },
  { name: "Kahlii", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301100.png", description: "จอมเวทไฟ สร้างความเสียหายวงกว้าง" },
  { name: "Keera", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/4c631eb81c40729aa258cc00774b2792.jpg", description: "มือสังหารหญิง เชี่ยวชาญโจมตีจุดอ่อน" },
  { name: "Kil'Groth", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301390.png", description: "นักรบดาบคู่ แข็งแกร่งและรุนแรง" },
  { name: "Kriknak", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301620.png", description: "แมลงศัตรูรวดเร็ว โจมตีแรง" },
  { name: "Krixi", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301060.png", description: "นางฟ้าเวท สร้างความเสียหายเวทมนตร์" },
  { name: "Krizzix", role: "Support", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/c416277e6010025f3ad1b3a585291367.png", description: "นักเวทซัพพอร์ต ฟื้นฟูและช่วยทีม" },
  { name: "Lauriel", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301410.png", description: "จอมเวทสายฟ้า บุกโจมตีรวดเร็ว" },
  { name: "Laville", role: "Carry", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/c3e8a62d08efa403fe9749696b6bdafe.jpg", description: "มือปืนแม่น ยิงเร็วและแรง" },
  { name: "Liliana", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305100.png", description: "จอมเวทอัญมณี ควบคุมพลังเวท" },
  { name: "Lindis", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301770.png", description: "นักธนูสายลับ โจมตีระยะไกลและหลบหลีก" },
  { name: "Lorion", role: "Support", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/8bfeffe5e464f8862217c7305dbc52fe.jpg", description: "ซัพพอร์ตเวท เสริมพลังและควบคุมศัตรู" },
  { name: "Lu Bu", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301280.png", description: "นักรบสายบู๊ แข็งแกร่งและบุกทะลวง" },
  { name: "Lumburr", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301680.png", description: "แทงค์ยักษ์ ปกป้องเพื่อนร่วมทีม" },
  { name: "Maloch", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301230.png", description: "นักรบปีศาจ แข็งแกร่งและดุดัน" },
  { name: "Marja", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301210.png", description: "จอมเวทมืด ใช้พลังความมืดทำลายล้าง" },
  { name: "Max", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301800.png", description: "แทงค์แนวหน้า พลังโจมตีและป้องกันสูง" },
  { name: "Mganga", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301190.png", description: "จอมเวทพิษ สร้างความเสียหายต่อเนื่อง" },
  { name: "Mina", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301200.png", description: "แทงค์ฟื้นฟู ปกป้องทีมและต้านแรงโจมตี" },
  { name: "Moren", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301700.png", description: "มือปืนสายบู๊ ยิงทำลายต่อเนื่อง" },
  { name: "Mortos", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/14775da68e9b3427a5626cf04d9448bc688675385.jpg", description: "นักรบวิญญาณ แข็งแกร่งและฟื้นฟูเร็ว" },
  { name: "Murad", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301310.png", description: "มือสังหารว่องไว ใช้ทักษะหลบหลีกสูง" },
  { name: "Nakroth", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/0b1620c324e7800851b412a9439a689b122140483.jpeg", description: "นักฆ่าระดับสูง เคลื่อนที่เร็วและโจมตีแรง" },
  { name: "Natalya", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301420.png", description: "จอมเวทมืด ทำลายล้างสูง" },
  { name: "Omega", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301140.png", description: "นักรบวิทยาศาสตร์ แข็งแกร่งและรุนแรง" },
  { name: "Omen", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/74fee9655c49277cd28834c189574987.png", description: "นักรบเงามืด คล่องแคล่วและโจมตีเร็ว" },
  { name: "Ormarr", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301170.png", description: "แทงค์สายบู๊ มีพลังโจมตีและป้องกันสูง" },
  { name: "Paine", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/7f56b60892d0215f36f436e0b6d812fa.jpg", description: "มือสังหารหนุ่ม รวดเร็วและดาเมจสูง" },
  { name: "Preyta", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301480.png", description: "จอมเวทไฟฟ้า สร้างความเสียหายต่อเนื่อง" },
  { name: "Qi", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305280.png", description: "มือสังหารสายบู๊ รวดเร็วและแรง" },
  { name: "Quillen", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305180.png", description: "นักฆ่ามืดมน โจมตีรวดเร็วและแม่นยำ" },
  { name: "Raz", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301570.png", description: "จอมเวทไฟ บุกโจมตีด้วยพลังแห่งไฟ" },
  { name: "Riktor", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305150.png", description: "แทงค์สายบู๊ ปกป้องทีมและควบคุมศัตรู" },
  { name: "Rouie", role: "Support", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/caea84b1bebac1a0f5f0b1d0c717c5ad.jpg", description: "ซัพพอร์ตสร้างโล่และฟื้นฟูพลัง" },
  { name: "Rourke", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305120.png", description: "มือปืนสายบู๊ ยิงแรงและแม่นยำ" },
  { name: "Roxie", role: "Tank", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/9d7b3043e93366865d62465b9a310f92580957575.jpg", description: "แทงค์สาวสายบู๊ ทนทานและโจมตีรุนแรง" },
  { name: "Ryoma", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301630.png", description: "นักดาบสายบู๊ รวดเร็วและแรง" },
  { name: "Sephera", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305270.png", description: "ซัพพอร์ตเวท ฟื้นฟูและป้องกันทีม" },
  { name: "Sinestrea", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301340.png", description: "จอมเวทความมืด สร้างความเสียหายวงกว้าง" },
  { name: "Skud", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/d40b1c67247e69e1b2fd63ed44d9d7cd.jpg", description: "นักสู้แข็งแกร่ง ป้องกันและโจมตีดี" },
  { name: "Slimz", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301690.png", description: "นักธนูโจมตีเร็ว ยิงต่อเนื่อง" },
  { name: "Super man", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301400.png", description: "ฮีโร่แห่งความยุติธรรม แข็งแกร่งและรวดเร็ว" },
  { name: "Taara", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301440.png", description: "แทงค์สาวสายบู๊ ป้องกันทีมดี" },
  { name: "Tachi", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/e6a658b1e3485aba22fd6e401700b4d0722633259.png", description: "นักดาบมืออาชีพ รวดเร็วและแม่นยำ" },
  { name: "TeeMee", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301860.png", description: "คู่หูซัพพอร์ตเสริมพลังและป้องกัน" },
  { name: "Teeri", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/9e694302eee95cda70d5d7878f29859f604290561.jpg", description: "มือสังหารหญิง ว่องไวและแม่นยำ" },
  { name: "Tel'Annas", role: "Carry", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/316aedd067a6891ec9262c4791048c4e002690156.jpg", description: "นักธนูหญิง ยิงระยะไกลแม่นยำ" },
  { name: "Thane", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301350.png", description: "แทงค์นักรบ ปกป้องและควบคุมศัตรู" },
  { name: "The Flash", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305070.png", description: "ฮีโร่วิ่งเร็วที่สุด โจมตีเร็วและหลบเก่ง" },
  { name: "Thorne", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/177b5dc323de1f131104bc3a61a30dc5.jpg", description: "นักรบดาบคู่ ทะลวงแนวหน้า" },
  { name: "Toro", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301050.png", description: "แทงค์ยักษ์ ป้องกันและโจมตีรุนแรง" },
  { name: "Tulen", role: "Mage", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301900.png", description: "จอมเวทไฟฟ้า สร้างความเสียหายต่อเนื่อง" },
  { name: "Valhein", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301330.png", description: "มือปืนสายบู๊ ยิงแม่นยำและเร็ว" },
  { name: "Veera", role: "Mage", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/4596bab5ebaf35a3023239179b889122653464512.jpg", description: "จอมเวทความมืด ผู้ใช้เวทมนตร์ร้ายแรง" },
  { name: "Veres", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305200.png", description: "นักรบหญิงสายบู๊ แข็งแกร่งและเร็ว" },
  { name: "Violet", role: "Carry", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/8c6c8393bd8e9b873eeb2028cc5ff239784341618.png", description: "มือปืนสาว ยิงระยะไกลแม่นยำ" },
  { name: "Volkath", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/0226a3b59534f7e097b31faf55719ffc.jpg", description: "นักรบปีศาจ แข็งแกร่งและบุกเร็ว" },
  { name: "Wiro", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301940.png", description: "มือสังหารจอมยุทธ์ รวดเร็วและแม่นยำ" },
  { name: "Wisp", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305080.png", description: "ซัพพอร์ตสายเวท ฟื้นฟูและป้องกันทีม" },
  { name: "Wonder Woman", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305040.png", description: "นักรบหญิงแข็งแกร่ง พร้อมพลังวิเศษ" },
  { name: "WuKong", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/8e1736836bc737a5a9495cec55c1d64d.jpg", description: "นักรบวานร คล่องแคล่วและแข็งแกร่ง" },
  { name: "Xeniel", role: "Support", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301490.png", description: "ทูตสวรรค์ ซัพพอร์ตและป้องกันทีม" },
  { name: "Y'bneth", role: "Tank", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/305090.png", description: "ต้นไม้ยักษ์ แทงค์ทนทานและควบคุมศัตรู" },
  { name: "Yan", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/e30adc9818a781b682c88a97ff830e00605372736.jpg", description: "นักรบมือเปล่า เคลื่อนที่รวดเร็วและโจมตีแรง" },
  { name: "Yena", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/5c5c460fe14e67f351782aa133fbb1d5432803963.jpeg", description: "นักสู้หญิง แข็งแกร่งและมีทักษะสูง" },
  { name: "Yorn", role: "Carry", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301120.png", description: "นักธนูสายบู๊ ยิงต่อเนื่องแรง" },
  { name: "Yue", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/215047bd2e8615e7ca6758d94e65b053913347022.jpg", description: "มือสังหารหญิงผู้ว่องไวและแม่นยำ" },
  { name: "Zanis", role: "Fighter", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301290.png", description: "นักรบสายดาบคู่ แข็งแกร่งและรวดเร็ว" },
  { name: "Zata", role: "Assassin", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/e6cdecc7664a50ccc8bdef6172479882.jpg", description: "มือสังหารผู้เชี่ยวชาญพลังมิติ เคลื่อนที่เร็วและสร้างดาเมจแรง" },
  { name: "Zephys", role: "Fighter", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/a19d433210391d6be2774f3fa5a7cd21087807594.jpg", description: "นักรบสายบู๊ผู้แข็งแกร่ง โจมตีรวดเร็วและทนทาน" },
  { name: "Zill", role: "Assassin", img: "https://cdn-webth.garenanow.com/mgames/kgcenter/th/Art_Resources/UI/Dynamic/Icon/301460.png", description: "มือสังหารสายเวทมนตร์ เคลื่อนที่เร็วและโจมตีรุนแรง" },
  { name: "Zip", role: "Support", img: "https://cdn-webth.garenanow.com/webth/cdn/gth/rov/non-events/official/5248fb3ed974b26ee5a0548f4a4c7bdb604470912.jpeg", description: "แทงค์สายอม ช่วยเหลือ พาออกไฟท์" },
];


const categories = ["ALL HEROES", "ASSASSIN", "MAGE", "FIGHTER", "CARRY", "TANK", "SUPPORT"];

export default function Product() {
  const [filter, setFilter] = useState("ALL HEROES");
  const [search, setSearch] = useState("");
  const [showItems, setShowItems] = useState(false); // state สำหรับการแสดงข้อมูลไอเทม

  const filteredHeroes = heroes.filter((hero) => {
    const matchRole = filter === "ALL HEROES" || hero.role.toUpperCase() === filter;
    const matchSearch = hero.name.toLowerCase().includes(search.toLowerCase());
    return matchRole && matchSearch;
  });

  const handleToggleItems = () => {
    setShowItems(!showItems); // เปลี่ยนสถานะการแสดงข้อมูลไอเทม
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#0d0d0d", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ color: "#f0c000", textAlign: "center" }}>เหล่าฮีโร่อีกมากมาย!</h1>

      {/* ตัวกรองหมวดหมู่ฮีโร่ */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", margin: "1rem 0" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: filter === cat ? "#f0c000" : "#1c1c1c",
              color: filter === cat ? "#000" : "#fff",
              border: "1px solid #f0c000",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="ค้นหา..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "1px solid #f0c000",
            width: "300px",
            backgroundColor: "#1c1c1c",
            color: "#fff",
          }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        {filteredHeroes.map((hero, i) => (
          <div
            key={i}
            style={{
              width: "180px",
              backgroundColor: "#1c1c1c",
              border: "1px solid #f0c000",
              borderRadius: "8px",
              textAlign: "center",
              padding: "0.5rem",
              color: "#fff",
            }}
          >
            <img src={hero.img} alt={hero.name} style={{ width: "100%", borderRadius: "5px", marginBottom: "0.5rem" }} />
            <div style={{ fontWeight: "bold" }}>{hero.name}</div>
            <div style={{ color: "#f0c000", fontSize: "0.9rem" }}>{hero.role}</div>
            <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>{hero.description}</p>
          </div>
        ))}
      </div>

      {/* 🔽 ส่วน "ไอเทมคืออะไร?" */}
      <div style={{ backgroundColor: "#1c1c1c", padding: "1rem", borderRadius: "10px", margin: "1rem 0" }}>
        <h2 style={{ color: "#f0c000" }}>ไอเทมคืออะไร?</h2>
        <p>ไอเทมคือของที่ช่วยเพิ่มคุณสมบัติต่าง ๆ ให้เรา ช่วยให้เราได้เปรียบศัตรู เช่น ถ้าเรามีพลังโจมตีมากกว่าเราก็จะมีโอกาสในการฆ่าศัตรูได้มากขึ้น</p>

        {/* ปุ่มดูไอเทม */}
        <button
          onClick={handleToggleItems}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#f0c000",
            color: "#000",
            border: "1px solid #f0c000",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "1rem",
          }}
        >
          {showItems ? "ซ่อนไอเทม" : "ดูไอเทม"}
        </button>

        {/* ข้อมูลไอเทม */}
        {showItems && (
          <>
            <h3 style={{ color: "#f0c000" }}>เปรียบเทียบคุณสมบัติ</h3>
            <table style={{ width: "100%", color: "#fff", borderCollapse: "collapse", marginBottom: "1rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#333" }}>
                  <th style={{ padding: "8px", border: "1px solid #f0c000" }}>คุณสมบัติ</th>
                  <th style={{ padding: "8px", border: "1px solid #f0c000" }}>ไม่มีไอเทม</th>
                  <th style={{ padding: "8px", border: "1px solid #f0c000" }}>มีไอเทม</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>พลังโจมตี</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>350</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>705 (350+355)</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>พลังชีวิต</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>6204</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>8604 (6204+2400)</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>เกราะ</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>364 (37.7%)</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>1034 (364+670) – 63.2%</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>เจาะเกราะ</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>0</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>45%</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>ความเร็วเคลื่อนที่</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>380</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>440 (380+60)</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>ลดคูลดาวน์</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>0%</td>
                  <td style={{ padding: "8px", border: "1px solid #f0c000" }}>35%</td>
                </tr>
                {/* เพิ่มข้อมูลที่เหลือตามต้องการ */}
              </tbody>
            </table>

            <h3 style={{ color: "#f0c000" }}>ประเภทไอเทม</h3>
            <p>ประเภทของไอเทมมีทั้งหมด 6 ประเภท ซึ่งการใช้งานไอเทมมี 2 แบบ คือ:</p>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li><strong>Passive</strong>: ไอเทมที่เมื่อซื้อมา จะเพิ่มความสามารถให้ฮีโร่ได้อัตโนมัติโดยไม่ต้องกดใช้งาน</li>
              <li><strong>Active</strong>: ไอเทมที่เมื่อซื้อมา จะต้องกดใช้จึงจะเพิ่มความสามารถให้กับฮีโร่</li>
            </ul>

            <h3 style={{ color: "#f0c000" }}>ตัวอย่างไอเทมที่ใช้</h3>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>Sonic Boots</li>
              <li>Spear of Longinus</li>
              <li>Muramasa</li>
              <li>Frost Cape</li>
              <li>Shield of the Lost</li>
              <li>Fenrir’s Tooth</li>
            </ul>
          </>
        )}
        <p style={{ marginTop: "1rem" }}>
          การออกไอเทม หรือ การออกของ = <span style={{ color: "#f0c000" }}>การซื้อไอเทม</span>
        </p>
        {/* 🔽 ส่วนใหม่ที่เพิ่ม: ประเภทของไอเทม */}
    <h3 style={{ color: "#f0c000", marginTop: "2rem" }}>ประเภทของไอเทม</h3>
    <p>ประเภทของไอเทมมีทั้งหมด 6 ประเภท ซึ่งการใช้งานไอเทมมี 2 แบบ คือ</p>
    <ul style={{ paddingLeft: "1.2rem" }}>
      <li><strong style={{ color: "#f0c000" }}>Passive</strong> — ไอเทมที่เมื่อซื้อมา จะเพิ่มความสามารถให้ฮีโร่ได้อัตโนมัติโดยไม่ต้องกดใช้งาน</li>
      <li><strong style={{ color: "#f0c000" }}>Active</strong> — ไอเทมที่เมื่อซื้อมา จะต้องกดใช้จึงจะเพิ่มความสามารถให้กับฮีโร่</li>
    </ul>

    {/* แสดงภาพประกอบประเภทไอเทม */}
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <img 
        src="https://cdn-webth.garenanow.com/webth/cdn/rov/gameguides/itemtype/damage.png" 
        alt="ประเภทของไอเทม" 
        style={{ maxWidth: "50%", borderRadius: "10px", border: "1px solid #f0c000" }} 
      />
    </div>
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <img 
        src="https://cdn-webth.garenanow.com/webth/cdn/rov/gameguides/itemtype/magic_damage.png" 
        alt="ประเภทของไอเทม" 
        style={{ maxWidth: "50%", borderRadius: "10px", border: "1px solid #f0c000" }} 
      />
    </div>
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <img 
        src="https://cdn-webth.garenanow.com/webth/cdn/rov/gameguides/itemtype/defense.png" 
        alt="ประเภทของไอเทม" 
        style={{ maxWidth: "50%", borderRadius: "10px", border: "1px solid #f0c000" }} 
      />
    </div>
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <img 
        src="https://cdn-webth.garenanow.com/webth/cdn/rov/gameguides/itemtype/movement.png" 
        alt="ประเภทของไอเทม" 
        style={{ maxWidth: "50%", borderRadius: "10px", border: "1px solid #f0c000" }} 
      />
    </div>
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <img 
        src="https://cdn-webth.garenanow.com/webth/cdn/rov/gameguides/itemtype/jungle.png" 
        alt="ประเภทของไอเทม" 
        style={{ maxWidth: "50%", borderRadius: "10px", border: "1px solid #f0c000" }} 
      />
    </div>
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <img 
        src="https://cdn-webth.garenanow.com/webth/cdn/rov/gameguides/itemtype/support.png" 
        alt="ประเภทของไอเทม" 
        style={{ maxWidth: "50%", borderRadius: "10px", border: "1px solid #f0c000" }} 
      />
    </div>
    
    </div>
      {/* 🔼 จบส่วน "ไอเทมคืออะไร?" */}
    </div>
  );
}
