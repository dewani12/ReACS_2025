
function HeroSection() {

    const timeLine = () => {
        return (
            <div >
                <div className="text-2xl heading-cl font-bold">Timeline</div>
                <div className="my-2 text-sm">
                    20-02-2025 <span className="text-white ml-2">No dates updated</span>
                </div>
                <hr />
            </div>
        )
    }

    const RegularTracks = [
        {
            heading: "Vision Computing:",
            content: "Image/video processing, Image/video synthesis, Image Enhancement/Super Resolution/Restoration, Image/Video Retrieval, Remote sensing, Multispectral/Hyperspectral image Processing, Segmentation and Shape Representation, Image/Video Scene Understanding, Medical Image and Video Analysis, Stereo Vision, Document Image Analysis, Image and Video Matching."
        },
        {
            heading: "Cybersecurity and Forensics:",
            content: "Network and cyber security, Computer security, Systems security, Security policy, model and architecture, Formal methods and verification, Security in mobile and wireless communications,  Privacy and trust, Attacks on AI models, Privacy preservation of AI, Malware forensics, Mobile app forensics, Blockchains and distributed ledger security, IoT security."
        },
        {
            heading: "AI and Data Science:",
            content: "Computational Intelligence, Optimization Techniques, Explainable AI, Value AI, Robotic Intelligence, Data Intelligence, Multimedia Intelligent Systems, Document and Synthetic Visual Processing, Transfer Learning, Multi-task Learning, Evolutionary Algorithms, Graph Convolutional Networks, Applications in AI."
        },
        {
            heading: "Communication Networks:",
            content: "Next-Generation Internet Architectures, Software-Defined Networking (SDN), Network Function Virtualization (NFV), Protocol Design and Optimization, Network Interoperability, Cellular Networks (5G, 6G, and Beyond), Ad Hoc, Mesh, and Sensor Networks, Vehicular Networks (VANETs, V2X), Data Dissemination in Intelligent Transportation System, Low-Power Wide-Area Networks (LPWANs), Wireless Body Area Networks (WBANs), AI/ML in Communication Networks, Multimedia Streaming Services, IoT-Fog interconnection Network, Mobile Edge Computing, Cloud Computing etc."
        },
        {
            heading: "Cyber Physical Systems and IoT:",
            content: "Smart Cities and Infrastructure, Industrial IoT (IIoT) and Smart Manufacturing, Edge Computing and IoT, Security and Privacy in IoT and CPS, Sensors and Actuators in IoT, IoT Data Analytics and Machine Learning, Healthcare and Medical IoT (Health IoT), Energy Management and Smart Grids, CPS for autonomous robots and drones, Standards and Interoperability in IoT."
        },
        {
            heading: "Robotics and Autonomous Systems:",
            content: "SLAM, Sensor Fusion, AI navigation, Deep/reinforcement learning in robotics, Swarm coordination, Automation in manufacturing, Healthcare, Agriculture. Autonomous Vehicles, UAVs, Underwater Robots, Human-Robot interaction and Assistive Robotics, Cybersecurity in Robotics, Multi Agent Systems, Emergent behaviour."
        },
        {
            heading: "Computer and Software Systems:",
            content: "Computer Architecture, Distributed Systems, High-Performance Computing, Embedded Systems, Cloud Computing, Human-Computer Interaction, Software architecture and design patterns, Secure software development and Static Code Analysis, Model-driven engineering and low-code development, Open-source software development and governance, Software testing, verification, and validation."
        },
        {
            heading: "Emerging Computing Technologies and Systems:",
            content: "Social Networks and Complex Networks, Algorithmic Game Theory and Computational Economics, Blockchain and Decentralized Systems, Post-Quantum Computing and Cryptography, Emerging Computing Paradigms, Ethics, Privacy, and Trust in Emerging Technologies, Applications of Emerging Technologies."
        },
    ]

    return (


        <div className="inter primary-bg text-cl pt-8 px-4 md:px-8 py-4 flex space-x-8">

            <div className="md:w-[70%]">
                <div className="md:hidden mt-2 mb-6">
                    {timeLine()}
                </div>
                <div className="mb-6">
                    <div className="heading-cl text-2xl font-bold">Welcome to ReACS 2025</div>
                    <div className="text-sm mt-2">Recent Advances in Computing and Systems - 2025</div>
                </div>
                <div className="mb-6">
                    <div className="heading-cl text-2xl font-bold">About ReACS</div>
                    <div className="text-sm mt-2">The International Conference on Recent Advances in Computing and Systems, 2025 (ReACS-2025) is being organised by the Department of CSE, ABV-IIITM, to functionalize it as a platform for dissemination of recent high-quality research work in the domain of Computing and Systems. This conference covers the wide domain of Computer Science and Engineering and will provide a means to exchange innovative ideas and recent advances among researchers from academia and industry.</div>
                </div>
                <div>
                    <div className="heading-cl text-2xl font-bold">Regular Tracks</div>
                    {RegularTracks.map((item) => (
                        <div className="mt-2">
                            <div className="heading-cl text-xl font-semibold">{item.heading}</div>
                            <div className="text-sm mt-1">{item.content}</div>
                        </div>
                    ))}
                    {/* <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Vision Computing:</div>
                            <div className="text-[12px] mt-1">Image/video processing, Image/video synthesis, Image Enhancement/Super Resolution/Restoration, Image/Video Retrieval, Remote sensing, Multispectral/Hyperspectral image Processing, Segmentation and Shape Representation, Image/Video Scene Understanding, Medical Image and Video Analysis, Stereo Vision, Document Image Analysis, Image and Video Matching.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Cybersecurity and Forensics:</div>
                            <div className="text-[12px] mt-1">Network and cyber security, Computer security, Systems security, Security policy, model and architecture, Formal methods and verification, Security in mobile and wireless communications,  Privacy and trust, Attacks on AI models, Privacy preservation of AI, Malware forensics, Mobile app forensics, Blockchains and distributed ledger security, IoT security.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">AI and Data Science:</div>
                            <div className="text-[12px] mt-1">Computational Intelligence, Optimization Techniques, Explainable AI, Value AI, Robotic Intelligence, Data Intelligence, Multimedia Intelligent Systems, Document and Synthetic Visual Processing, Transfer Learning, Multi-task Learning, Evolutionary Algorithms, Graph Convolutional Networks, Applications in AI.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Communication Networks: </div>
                            <div className="text-[12px] mt-1">Next-Generation Internet Architectures, Software-Defined Networking (SDN), Network Function Virtualization (NFV), Protocol Design and Optimization, Network Interoperability, Cellular Networks (5G, 6G, and Beyond), Ad Hoc, Mesh, and Sensor Networks, Vehicular Networks (VANETs, V2X), Data Dissemination in Intelligent Transportation System, Low-Power Wide-Area Networks (LPWANs), Wireless Body Area Networks (WBANs), AI/ML in Communication Networks, Multimedia Streaming Services, IoT-Fog interconnection Network, Mobile Edge Computing, Cloud Computing etc.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Cyber Physical Systems and IoT: </div>
                            <div className="text-[12px] mt-1">Smart Cities and Infrastructure, Industrial IoT (IIoT) and Smart Manufacturing, Edge Computing and IoT, Security and Privacy in IoT and CPS, Sensors and Actuators in IoT, IoT Data Analytics and Machine Learning, Healthcare and Medical IoT (Health IoT), Energy Management and Smart Grids, CPS for autonomous robots and drones, Standards and Interoperability in IoT.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Robotics and Autonomous Systems: </div>
                            <div className="text-[12px] mt-1">SLAM, Sensor Fusion, AI navigation, Deep/reinforcement learning in robotics, Swarm coordination, Automation in manufacturing, Healthcare, Agriculture. Autonomous Vehicles, UAVs, Underwater Robots, Human-Robot interaction and Assistive Robotics, Cybersecurity in Robotics, Multi Agent Systems, Emergent behaviour.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Computer and Software Systems: </div>
                            <div className="text-[12px] mt-1">Computer Architecture, Distributed Systems, High-Performance Computing, Embedded Systems, Cloud Computing, Human-Computer Interaction, Software architecture and design patterns, Secure software development and Static Code Analysis, Model-driven engineering and low-code development, Open-source software development and governance, Software testing, verification, and validation.</div>
                        </div>
                        <div className="mt-2">
                            <div className="heading-cl text-md font-semibold">Emerging Computing Technologies and Systems: </div>
                            <div className="text-[12px] mt-1">Social Networks and Complex Networks, Algorithmic Game Theory and Computational Economics, Blockchain and Decentralized Systems, Post-Quantum Computing and Cryptography, Emerging Computing Paradigms, Ethics, Privacy, and Trust in Emerging Technologies, Applications of Emerging Technologies.</div>
                        </div> */}
                </div>
            </div>
            <div className="max-md:hidden w-[30%]">
                {timeLine()}
            </div>

        </div>
    )
}

export default HeroSection
