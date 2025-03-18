import { Card } from "../components/index.js";

const committeeData = [
  { title: "Patrons", members: [
    { src: "http://iiitm.ac.in/images/demo/teachers/1650440085_Prof.-Sri-Niwas-Singh.jpg", name: "Prof. S. N. Singh", dsgn: "Director, ABV-IIITM, India" }
  ]},
  { title: "General Chairs", members: [
    { src: "https://www.iiitm.ac.in/images/Photo.jpg", name: "Dr. Vinod Kumar Jain", dsgn: "ABV-IIITM, India" },
    { src: "https://media.licdn.com/dms/image/v2/C4D03AQErzve6cmR0gA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660581378525?e=1747267200&v=beta&t=dTtWYhJTDjo8DBndVRleuOcZefOioIUdCdyf4Q050hQ", name: "Dr. Manish Dixit", dsgn: "MITS Gwalior, India"}
  ]},
  { title: "General Co Chairs", members: [
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1718101905_KVARYA.jpg", name: "Prof. K. V. Arya", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1692009722_WhatsApp%20Image%202023-08-14%20at%2015.46.28.jpeg", name: "Prof. Shashikala Tapaswi", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1686288088_pksingh%20(2).jpg", name: "Prof. P. K. Singh", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1690439255_vk%20jpeg.jpg", name: "Dr. Vivek Tiwari", dsgn: "ABV-IIITM, India" }
  ]},
  { title: "Oversight Committee", members: [
    { src: "https://media.licdn.com/dms/image/v2/C5603AQE0eE1tia_nmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517596536215?e=1747872000&v=beta&t=jS2lFTbg6tTxLZPJNpx26vItokO3UkkeheAFXEUcQEA", name: "Dr. Jitendra Agarwal", dsgn: "School of IT, RGPV Bhopal" },
    { src: "https://0.academia-photos.com/13218913/14598458/15454990/s200_dr._dilip_singh.sisodia.jpg", name: "Dr. Dilip Singh Sisodiya", dsgn: "NIT RAIPUR" }
  ]},
  { title: "Technical Program Chairs", members: [
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1533544986_godfrey_pic.jpg", name: "Dr. Wilfred G Godfrey", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1533546077_drsaumya.jpg", name: "Dr. Saumya Bhadauria", dsgn: "ABV-IIITM, India" }
  ]},
  { title: "Conference Secretary", members: [
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1601567414_IMG_20201001_171900.jpg", name: "Dr. Santosh Singh Rathore", dsgn: "ABV-IIITM, India" }
  ]},
  { title: "Publication Chairs", members: [
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQGHHhnGCMYTzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676528532125?e=1747872000&v=beta&t=xNthl3RIMBA4b7uauNHmsLyOJPB0PzdNfTPzLLda1Gs", name: "Dr. Robin Singh Bhadoria", dsgn: "NIT Hamirpur"},
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1533546077_drsaumya.jpg", name: "Dr. Saumya Bhadauria", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1554378514_DSC_3785.JPG", name: "Dr. Debanjan Sadhya", dsgn: "ABV-IIITM, India" }
  ]},
  { title: "Finance and Sponsorship Chairs", members: [
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1677497918_AvadhKishor.jpg", name: "Dr. Avadh Kishor", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1690364914_DD%20-%20Copy-fotor-bg-remover-2023072610251.png", name: "Dr. Deepak Kumar Dewangan", dsgn: "ABV-IIITM, India" },
    { src: "https://www.ijies.org/wp-content/uploads/2020/07/MPS-Chawla.jpeg", name: "Mr. M P S Chawla", dsgn: "SGSITS Indore, India" }
  ]},
  { title: "Web and Publicity Chairs", members: [
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1680515973_nsp3.jpg", name: "Dr. Narinder Singh Punn", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/New-Photo.jpg", name: "Dr. Chittaranjan Swain", dsgn: "ABV-IIITM, India" }
  ]},
  { title: "Special Session, Tutorial and PhD Symposium Chairs", members: [
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1601567414_IMG_20201001_171900.jpg", name: "Dr. Santosh Singh Rathore", dsgn: "ABV-IIITM, India" },
    { src: "https://www.iiitm.ac.in/images/demo/teachers/1677497559_Amrendra%20.jpg", name: "Dr. Amrendra Singh Yadav", dsgn: "ABV-IIITM, India" }
  ]}
];

function Committee() {
  return (
    <div className="inter py-4 px-4">
      {committeeData.map((section, index) => (
        <div key={index} className="flex flex-col items-center mb-12">
          <div className="text-3xl mb-4">{section.title}</div>
          <div className={`${
            section.members.length >= 4 ? "grid grid-cols-1 md:grid-cols-2 gap-4 justify-center" : "flex flex-wrap justify-center gap-4"
          }`}>
            {section.members.map((member, i) => (
              <Card key={i} src={member.src} name={member.name} dsgn={member.dsgn} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Committee;
