function saveProfile(){

    let name = document.getElementById("studentName").value;
    let phone = document.getElementById("PhoneNo").value; // Changed variable name from roll to phone
    let course = document.getElementById("course").value; // Changed variable name from dept to course
    let sem = document.getElementById("semester").value;
    let sgpa = document.getElementById("targetSGPA").value;

    if(name) {
        document.getElementById("profileResult").innerHTML =
        "<h3>Student Information</h3>" +
        "Name: " + name + "<br>" +
        "Phone No: " + phone + "<br>" +
        "Course: " + course + "<br>" +
        "Semester: " + sem + "<br>" +
        "Target SGPA: " + sgpa;
    } else {
        document.getElementById("profileResult").innerHTML = 
        "<span style='color: red;'>Please enter your name to save your profile.</span>";
    }
}
// STUDY PLANNER

function generatePlan(){

let subjects =
document.getElementById("subjects").value;

let hours =
parseFloat(document.getElementById("hours").value);

if(subjects==="" || isNaN(hours))
{
document.getElementById("planResult").innerHTML =
"Please enter subjects and study hours.";
return;
}

let subjectArray =
subjects.split(",");

let perSubject =
(hours / subjectArray.length).toFixed(1);

let result = "<h3>Today's Study Plan</h3>";

subjectArray.forEach(subject => {

result +=
subject.trim() +
" : " +
perSubject +
" Hours <br>";

});

document.getElementById("planResult").innerHTML =
result;

}



// EXAM COUNTDOWN

function calculateCountdown(){

let examDate =
document.getElementById("examDate").value;

if(examDate==="")
{
document.getElementById("countdown").innerHTML =
"Please select an exam date.";
return;
}

let today =
new Date();

let exam =
new Date(examDate);

let difference =
exam - today;

let days =
Math.ceil(
difference / (1000*60*60*24)
);

document.getElementById("countdown").innerHTML =
days + " Days Left For Exam";
}



// TO DO LIST

function addTask(){

let task =
document.getElementById("taskInput").value;

if(task==="") return;

let li =
document.createElement("li");

li.innerHTML = "✅ " + task;

document.getElementById("taskList")
.appendChild(li);

document.getElementById("taskInput").value="";
}



// PROGRESS TRACKER

function calculateProgress(){

let total =
parseInt(
document.getElementById("totalTopics").value
);

let completed =
parseInt(
document.getElementById("completedTopics").value
);

if(isNaN(total) || isNaN(completed))
{
document.getElementById("progressResult").innerHTML =
"Please enter valid values.";
return;
}

let progress =
((completed/total)*100).toFixed(2);

document.getElementById("progressResult").innerHTML =
"Progress : " +
progress +
"%";
}

function showProgress(){

    let mon = Number(document.getElementById("mon").value) || 0;
    let tue = Number(document.getElementById("tue").value) || 0;
    let wed = Number(document.getElementById("wed").value) || 0;
    let thu = Number(document.getElementById("thu").value) || 0;
    let fri = Number(document.getElementById("fri").value) || 0;
    let sat = Number(document.getElementById("sat").value) || 0;
    let sun = Number(document.getElementById("sun").value) || 0;

    let total = mon + tue + wed + thu + fri + sat + sun;
    let avg = (total / 7).toFixed(1);

    // 1. Update the text report just like before
    document.getElementById("weeklyResult").innerHTML =
        "Total Study Hours = " + total + "<br>Average Per Day = " + avg + " Hours";

    // 2. Map days to data for the graph
    let days = [
        { name: "Mon", hrs: mon },
        { name: "Tue", hrs: tue },
        { name: "Wed", hrs: wed },
        { name: "Thu", hrs: thu },
        { name: "Fri", hrs: fri },
        { name: "Sat", hrs: sat },
        { name: "Sun", hrs: sun }
    ];

    // 3. Build the visual bar chart container
    let graphHTML = `<div style="display: flex; align-items: flex-end; justify-content: space-between; height: 140px; padding: 20px 10px 10px 10px; background: #fdfdfd; border-radius: 6px; margin-top: 15px; border: 1px solid #e2e8f0;">`;

    days.forEach(day => {
        // Assume 8 hours of study is a 100% full bar
        let heightPercent = Math.min((day.hrs / 8) * 100, 100); 
        if (day.hrs === 0) heightPercent = 6; // small baseline so 0 hours looks neat

        graphHTML += `
            <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <span style="font-size: 11px; font-weight: bold; margin-bottom: 4px; color: #4a5568;">${day.hrs}h</span>
                <div style="width: 20px; height: ${heightPercent}px; background: linear-gradient(to top, #3182ce, #2b6cb0); border-radius: 3px; transition: height 0.3s ease;"></div>
                <span style="font-size: 11px; color: #718096; margin-top: 6px; font-weight: 500;">${day.name}</span>
            </div>
        `;
    });

    graphHTML += `</div>`;
    
    // 4. Inject the graph directly below your text report
    document.getElementById("graphContainer").innerHTML = graphHTML;
}

// DOUBT SOLVER

function answerQuestion(){

let q =
document.getElementById("question")
.value.toLowerCase();

let ans="";

if(q.includes("python"))
ans="Python is a high-level programming language used in AI, Machine Learning and Web Development.";

else if(q.includes("java"))
ans="Java is an object-oriented programming language.";

else if(q.includes("c++"))
ans="C++ is widely used in software and game development.";

else if(q.includes("html"))
ans="HTML is used to create the structure of web pages.";

else if(q.includes("css"))
ans="CSS is used to style web pages.";

else if(q.includes("javascript"))
ans="JavaScript makes websites interactive.";

else if(q.includes("ai"))
ans="Artificial Intelligence enables machines to mimic human intelligence.";

else if(q.includes("machine learning"))
ans="Machine Learning is a branch of AI that learns from data.";

else if(q.includes("database"))
ans="A database stores and manages data.";

else if(q.includes("sql"))
ans="SQL is used to communicate with databases.";

else if(q.includes("computer network"))
ans="Computer Networks connect devices for communication.";

else if(q.includes("router"))
ans="A router forwards data between networks.";

else if(q.includes("switch"))
ans="A switch connects devices inside a network.";

else if(q.includes("operating system"))
ans="An Operating System manages computer resources.";

else if(q.includes("linux"))
ans="Linux is an open-source operating system.";

else if(q.includes("cpu"))
ans="CPU is the brain of a computer.";

else if(q.includes("ram"))
ans="RAM temporarily stores data.";

else if(q.includes("algorithm"))
ans="An algorithm is a step-by-step solution to a problem.";

else if(q.includes("data structure"))
ans="A Data Structure organizes data efficiently.";

else if(q.includes("stack"))
ans="Stack follows LIFO.";

else if(q.includes("queue"))
ans="Queue follows FIFO.";

else if(q.includes("oop"))
ans="OOP stands for Object Oriented Programming.";

else if(q.includes("inheritance"))
ans="Inheritance allows one class to acquire properties of another.";

else if(q.includes("polymorphism"))
ans="Polymorphism allows one interface to have many forms.";

else if(q.includes("encapsulation"))
ans="Encapsulation protects data by restricting access.";

else if(q.includes("internet"))
ans="The Internet is a global network connecting millions of devices.";

else if(q.includes("cloud"))
ans="Cloud Computing provides computing resources over the internet.";

else if(q.includes("cyber security"))
ans="Cyber Security protects systems from attacks.";

else if(q.includes("iot"))
ans="IoT stands for Internet of Things.";

else if(q.includes("blockchain"))
ans="Blockchain is a decentralized digital ledger.";

else if(q.includes("sdg"))
ans="SDG stands for Sustainable Development Goals.";
else if(q.includes("dns"))
ans="DNS stands for Domain Name System. It converts domain names into IP addresses.";

else if(q.includes("arp"))
ans="ARP stands for Address Resolution Protocol. It maps IP addresses to MAC addresses.";

else if(q.includes("osi"))
ans="OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation and Application.";

else if(q.includes("oop"))
ans="OOP stands for Object Oriented Programming.";

else if(q.includes("inheritance"))
ans="Inheritance allows one class to acquire properties of another class.";

else if(q.includes("ip address"))
ans="An IP Address is a unique address used to identify a device on a network.";

else if(q.includes("mac address"))
ans="A MAC Address is a physical address assigned to a network interface card.";

else if(q.includes("topology"))
ans="Network topology refers to the arrangement of devices in a network.";

else if(q.includes("star topology"))
ans="In Star Topology all devices are connected to a central hub or switch.";

else if(q.includes("bus topology"))
ans="In Bus Topology all devices share a common communication cable.";

else if(q.includes("ring topology"))
ans="In Ring Topology each device is connected to two neighboring devices.";

else if(q.includes("mesh topology"))
ans="In Mesh Topology every device is connected to every other device.";

else if(q.includes("protocol"))
ans="A protocol is a set of rules that govern communication between devices.";

else if(q.includes("http"))
ans="HTTP stands for HyperText Transfer Protocol and is used for web communication.";

else if(q.includes("https"))
ans="HTTPS is the secure version of HTTP using SSL/TLS encryption.";

else if(q.includes("ftp"))
ans="FTP stands for File Transfer Protocol and is used to transfer files.";

else if(q.includes("smtp"))
ans="SMTP stands for Simple Mail Transfer Protocol and is used to send emails.";

else if(q.includes("pop3"))
ans="POP3 is used by email clients to receive emails from a mail server.";

else if(q.includes("imap"))
ans="IMAP allows email access and synchronization across multiple devices.";

else if(q.includes("ping"))
ans="Ping is a utility used to test connectivity between two network devices.";

else if(q.includes("subnet mask"))
ans="A subnet mask divides an IP address into network and host portions.";

else if(q.includes("gateway"))
ans="A gateway connects different networks and acts as an access point.";

else if(q.includes("packet"))
ans="A packet is a small unit of data transmitted over a network.";

else if(q.includes("frame"))
ans="A frame is the data unit of the Data Link Layer.";

else if(q.includes("datagram"))
ans="A datagram is the data unit of the Network Layer.";

else if(q.includes("segment"))
ans="A segment is the data unit of the Transport Layer.";

else if(q.includes("bandwidth"))
ans="Bandwidth is the maximum data transfer rate of a network.";

else if(q.includes("latency"))
ans="Latency is the delay between sending and receiving data.";

else if(q.includes("throughput"))
ans="Throughput is the actual amount of data transferred per unit time.";

else if(q.includes("crc"))
ans="CRC stands for Cyclic Redundancy Check and is used for error detection.";

else if(q.includes("error detection"))
ans="Error detection identifies errors in transmitted data.";

else if(q.includes("error correction"))
ans="Error correction detects and fixes transmission errors.";

else if(q.includes("unicast"))
ans="Unicast communication occurs between one sender and one receiver.";

else if(q.includes("broadcast"))
ans="Broadcast communication sends data to all devices in a network.";

else if(q.includes("multicast"))
ans="Multicast communication sends data to a selected group of devices.";

else if(q.includes("arp cache"))
ans="ARP Cache stores IP-to-MAC address mappings temporarily.";

else if(q.includes("routing"))
ans="Routing is the process of selecting the best path for data transmission.";

else if(q.includes("routing table"))
ans="A routing table contains information about available network routes.";

else if(q.includes("distance vector"))
ans="Distance Vector Routing uses hop count to determine the best route.";

else if(q.includes("link state"))
ans="Link State Routing uses complete network topology information.";

else if(q.includes("osi layers"))
ans="OSI Model Layers: Physical, Data Link, Network, Transport, Session, Presentation and Application.";

else if(q.includes("tcp ip"))
ans="TCP/IP is the protocol suite used for communication over the Internet.";

else if(q.includes("physical layer"))
ans="Physical Layer is responsible for transmitting raw bits over a medium.";

else if(q.includes("data link layer"))
ans="Data Link Layer provides node-to-node data transfer and error detection.";

else if(q.includes("network layer"))
ans="Network Layer handles routing and logical addressing.";

else if(q.includes("transport layer"))
ans="Transport Layer provides reliable end-to-end communication.";

else if(q.includes("session layer"))
ans="Session Layer manages communication sessions between devices.";

else if(q.includes("presentation layer"))
ans="Presentation Layer handles data translation, encryption and compression.";

else if(q.includes("application layer"))
ans="Application Layer provides services directly to users and applications.";
else
ans="Sorry, I don't know the answer yet. Please ask educational or technology-related questions.";

// Show a loading state first to simulate the AI Agent thinking
document.getElementById("answer").innerHTML = "<p style='color: #2196f3; font-style: italic;'>🤖 AI Agent is thinking...</p>";

// Wait 1 second (1000 milliseconds) before displaying the final answer
setTimeout(function() {
    document.getElementById("answer").innerHTML = `
        <div style="margin-top: 10px; padding: 12px; background-color: #e3f2fd; border-left: 5px solid #2196f3; border-radius: 4px;">
            💡 <b>AI Academic Response:</b><br>${ans}
        </div>
    `;
}, 1000);

}

// 8. Study Resources Hub Function
function getLinks() {
    let selectedSubject = document.getElementById("resourceSubject").value;
    let resultDiv = document.getElementById("resourceResult");

    let resources = {
        cn: {
            title: "Computer Networks (CN) Resources",
            links: [
                { name: "GeeksforGeeks Computer Networks Tutorials", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
                { name: "Cisco Packet Tracer Lab Guide", url: "https://www.netacad.com/" }
            ]
        },
        oop: {
            title: "Object-Oriented Programming (OOP) Resources",
            links: [
                { name: "W3Schools OOP Concepts", url: "https://www.w3schools.com/cpp/cpp_oop.asp" },
                { name: "Java OOPs Concepts Explained", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" }
            ]
        },
        python: {
            title: "Python Programming Resources",
            links: [
                { name: "Official Python Documentation & Guides", url: "https://docs.python.org/3/" },
                { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" }
            ]
        }
    };

    if (selectedSubject && resources[selectedSubject]) {
        let data = resources[selectedSubject];
        let html = `<div style="margin-top: 15px; padding: 12px; background-color: #f8fafc; border-left: 5px solid #64748b; border-radius: 4px; text-align: left;">
                        <h4 style="margin: 0 0 8px 0; color: #334155;">📖 ${data.title}:</h4>
                        <ul style="margin: 0; padding-left: 20px;">`;
        
        data.links.forEach(item => {
            html += `<li style="margin-bottom: 6px;"><a href="${item.url}" target="_blank" style="color: #2563eb; font-weight: 500; text-decoration: none;">${item.name} ↗️</a></li>`;
        });
        
        html += `</ul></div>`;
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = `<p style="color: red; margin-top: 10px;">❌ Please select a valid subject from the dropdown menu.</p>`;
    }
}