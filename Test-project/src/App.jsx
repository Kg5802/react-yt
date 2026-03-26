import React from 'react'

import Card from './Components/Card'
import { Car } from 'lucide-react';

const App = () => {

  const company = [
  {
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcBmJYUYj67mXeSfDXSDJ5Q8TpVUbAsmQpg&s",
    companyName: "TechNova Pvt Ltd",
    post : "Software Engineer",
    tags1: "Full Time",
    tags2 : "Senior Level",
    payPerHour: 800,
    posted: "2 days ago",
    location: "Mumbai, India"
  },
  {
    "img": "https://www.rahulgautam.com/images/innosoft/Logo.jpg",
    "companyName": "InnoSoft Solutions",
    "post": "Web Developer",
    "tags1": "Part Time",
    "tags2": "Junior Level",
    "payPerHour": 400,
    "posted": "1 day ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://img.freepik.com/premium-vector/cloud-net-logo-icon-cloud-computing-icon-vector-logo-design-template_1044445-995.jpg",
    "companyName": "CloudNet Systems",
    "post": "Data Analyst",
    "tags1": "Full Time",
    "tags2": "Junior Level",
    "payPerHour": 500,
    "posted": "3 days ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://img.freepik.com/premium-vector/modern-technology-logo-blue-circle-futuristic-digital-symbol_1274917-4950.jpg?semt=ais_hybrid&w=740&q=80",
    "companyName": "NextGen Tech",
    "post": "UI/UX Designer",
    "tags1": "Part Time",
    "tags2": "Senior Level",
    "payPerHour": 900,
    "posted": "5 days ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTdCkzIyiR-jXlCR6GsDDBHTrLo8DJyI2fQ&s",
    "companyName": "DigitalWave Pvt Ltd",
    "post": "Project Manager",
    "tags1": "Full Time",
    "tags2": "Senior Level",
    "payPerHour": 1000,
    "posted": "1 week ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l3cBNgktsOuIgcQfCfloLo8yP8em-c9eOw&s",
    "companyName": "ByteCraft Technologies",
    "post": "QA Tester",
    "tags1": "Part Time",
    "tags2": "Junior Level",
    "payPerHour": 350,
    "posted": "2 days ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXk72zDKlyUuYtAVdq-xk_dq7k0Kjs5Vyosw&s",
    "companyName": "SoftEdge Solutions",
    "post": "Backend Developer",
    "tags1": "Full Time",
    "tags2": "Junior Level",
    "payPerHour": 450,
    "posted": "4 days ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://tint.creativemarket.com/dfxDNTN998qyzeSKf5Js8DuLkGYtTI6Ul6cqgHVO5UU/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzQxOS80MTk0LzQxOTQ5MjYvYWxwaGEtdGVjaC02LW8ucG5n?1522137643",
    "companyName": "AlphaTech India",
    "post": "DevOps Engineer",
    "tags1": "Part Time",
    "tags2": "Senior Level",
    "payPerHour": 1200,
    "posted": "6 days ago",
    "location": "Mumbai, India"
  },
  {
    "img": "https://mir-s3-cdn-cf.behance.net/projects/404/04605e172266249.647c9eaa09688.png",
    "companyName": "Zenith Systems",
    "post": "System Administrator",
    "tags1": "Full Time",
    "tags2": "Senior Level",
    "payPerHour": 1100,
    "posted": "1 day ago",
    "location": "Mumbai, India"
  }
];



  return (
    <div className="parent">
      {company.map(function(elem){
        return <Card img={elem.img} companyName={elem.companyName} post={elem.post} tags1={elem.tags1}
        tags2={elem.tags2} pay={elem.payPerHour} location={elem.location} posted={elem.posted} />
      })}
    </div>
  )
}

export default App
