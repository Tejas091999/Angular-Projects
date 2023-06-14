import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  fullName="Tejas Londhe";
  jobTitle="Software Engineer";
  email="tejaslondhe9@gmail.com";
  phone="+91 9028371404";
  github="https://github.com/Tejas091999";

  educationList=[
    {degree:"Bachelor of Engineering" , university:"Pune University" , year:"2017-2021"},
    {degree:"HSC Board" , university:"(Ahmednagar College) State University" , year:"2015-2017"},
    {degree:"SSC Board" , university:"(Sacred Heart Convent High School) State University" , year:"2015"}
  ];

  workExperienceList = [
    {
      position:"Software Engineer",
      company:"Cognizant Technology",
      duration:"2021-Present",
      responsibilities : [
        "Maintaining the systems",
        "Monitoring different parameters",
        "Writing new scripts",
        "Maintaining the AWS services and different roles"
      ]
    }
  ]

  softSkillsList = ["Communication","Problem Solving","TeamWork"];
  technologyList = ["HTML/CSS","Javascript","Angularjs"];
  certificateList = ["Certificate1" , "Certificate2"] ;

  projectList = [
    {
      title : " Project 1 ",
      description : "Project 1 description",
      link : "https://project1-link"
    },
    {
      title : " Project 2 ",
      description : "Project 2 description",
      link : "https://project2-link"
    }
  ]
}
