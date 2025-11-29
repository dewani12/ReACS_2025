import { Footer, Navbar } from "../components/index.js";
import schedule from "../assets/ReACS_2025_Conference_Oral_presentation_Schedule.pdf";
import { Download } from "lucide-react"

function TableHeading({ track, session, timing, venue }) {
  return (
    <div className="my-6 p-4 bg-gray-100 rounded-lg shadow">
      <div className="text-xl font-semibold">{track}</div>
      <div className="text-md font-medium">Session: {session}</div>
      {timing && <div className="text-sm">Timing: {timing}</div>}
      <div className="text-sm">Venue: {venue}</div>
    </div>
  );
}

function PaperTable({ papers }) {
  return (
    <table className="w-full border-collapse my-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 w-24">Paper ID</th>
          <th className="border p-2">Paper Name</th>
        </tr>
      </thead>
      <tbody>
        {papers.map((p, i) => (
          <tr key={i} className="border">
            <td className="border p-2 text-center">{p.id}</td>
            <td className="border p-2">{p.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function Schedule() {
  return (
    <>
      <Navbar />

      <div className="inter primary-bg text-cl py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">

        <div className="text-2xl font-semibold mb-6">
          Tentative Program Schedule
        </div>
        <div className="mt-5">
          <a
            href={schedule}
            target="_blank"
            className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">
              Program Schedule
            </span>
          </a>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-4">Day 1 (19/12/2025)</h2>

        {/* ------------------------------------------------- */}
        {/* SLOT 1 */}
        {/* ------------------------------------------------- */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Slot 1</h3>

        {/* Session 1 */}
        <TableHeading
          track="Track: Vision Computing"
          session="1"
          venue="B-105"
        />
        <PaperTable
          papers={[
            { id: 70, name: "Advances in Neuroimaging Techniques for Detection and Monitoring Intracranial Hemorrhage" },
            { id: 226, name: "American Sign Language Recognition Using Deep Learning for Static Gesture Classification" },
            { id: 228, name: "Method Noise Filter based Multi focus Image Fusion Using CNN" },
            { id: 290, name: "Deep Learning for Skin Disease Classification Using Smartphone Images and Clinical Metadata" },
            { id: 301, name: "Optimizing EdgeML Image Denoising with PnP-ADMM, Quantization, and Pruning" },
            { id: 676, name: "Automated Segmentation of Unruptured Intracranial Aneurysms from TOF-MRA using GANs" },
            { id: 958, name: "Sound Event Detection using YOHO and Bottleneck Attention" }
          ]}
        />

        {/* Session 2 */}
        <TableHeading
          track="Track: Vision Computing"
          session="2"
          venue="B-106"
        />
        <PaperTable
          papers={[
            { id: 406, name: "Real-Time Proctoring System for Online Examinations Using MediaPipe Framework" },
            { id: 445, name: "Video Retrieval Using GAT Enhanced CLIP Model" },
            { id: 537, name: "Image Captioning with Gated Fusion Transformer and Dynamic Encoder Adaptation" },
            { id: 582, name: "Framework for Gym Posture Estimation using MediaPipe and OpenCV" },
            { id: 607, name: "Enhanced Whale Optimization Algorithm Integrated with Deep Learning-Based Edge Detection" },
            { id: 654, name: "Real-Time Analog Gauge Digitization Using 3D SegFormer and Physics-Guided Neural Rendering" },
            { id: 987, name: "LexiBoost: AI-Powered Automated Essay Scoring System with Comparative Model Analysis" },
            { id: 999, name: "Deep Learning-Based Multi-Angle Classification of Tree Species from UAV Images" }
          ]}
        />

        {/* Session 3 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="3"
          timing="12:30 PM to 02:00 PM"
          venue="B-107"
        />
        <PaperTable
          papers={[
            { id: 150, name: "Predictive Analytics for Youth Mental Health Leveraging ML to Identify Early Signs of Depression and Sleep Disorder" },
            { id: 274, name: "Retrieval Augmented Generation based Explainable Fact-Checking using Knowledge Graphs" },
            { id: 275, name: "Deep Spectrogram-Based EEG Decoding of Visual Stimuli Using a Novel CNN Architecture" },
            { id: 276, name: "Dynamic Risk Stratification in ICU Sepsis: A Deep Reinforcement Learning Approach Using Synthetic Data" },
            { id: 269, name: "Comparative Analysis of Metaheuristic Algorithms for Multiple Sequence Alignment of rpoB Genes" },
            { id: 282, name: "Forecasting with Open-AI Transformer Model S and P 500 Index" },
            { id: 288, name: "Optimized ADMET-Driven Molecular Design Using GRU-GCN Architecture with Multi-Objective Optimization" },
            { id: 293, name: "Comparative Analysis of Deep Learning Models for Skin Cancer Detection" }
          ]}
        />

        {/* Session 4 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="4"
          timing="12:30 PM to 02:00 PM"
          venue="B-207"
        />
        <PaperTable
          papers={[
            { id: 335, name: "Designing a Framework for Deepfake Text Detection using Multi Model Ensembling Techniques" },
            { id: 341, name: "Ensemble-Based Diabetic Retinopathy Detection Using CNN, Random Forest, and AdaBoost" },
            { id: 414, name: "Leveraging Deep Learning for Nutritional Profiling: EfficientNetB0, MobileNetV2, ResNet50" },
            { id: 415, name: "Cross-Lingual Commonsense Reasoning using XLM-R" },
            { id: 424, name: "Brain Tumor Classification from MRI Scans Using Transfer Learning and Hybrid Deep Learning Models" },
            { id: 432, name: "Adaptive Multimodal Approach for Social Media Sentiment Analysis Using Vision-Language Transformers" },
            { id: 529, name: "Hierarchical BiLSTM with Attention for Text Summarization" },
            { id: 549, name: "Thermal Feature-Based Subclinical Mastitis detection in cattle using SVM" }
          ]}
        />

        {/* Session 5 */}
        <TableHeading
          track="Track: Emerging Computing Technologies and Systems"
          session="5"
          timing="12:30 PM to 2:00 PM"
          venue="B-208"
        />
        <PaperTable
          papers={[
            { id: 283, name: "Multistage Pipeline for Symbolic Music Generation with Deep Learning" },
            { id: 305, name: "Predicting Droughts Smarter: End-to-End MLOps Pipeline" },
            { id: 618, name: "Video Game Addiction, Mental Health, and Social Well-being via SEM" },
            { id: 678, name: "Hybrid Identity Authentication System using Deep Learning" },
            { id: 972, name: "UTAUT Analysis of Mobile Banking Adoption in India" },
            { id: 983, name: "AI’s Dual Impact on Economic Growth and CO2 Emissions" }
          ]}
        />

        {/* ------------------------------------------------- */}
        {/* SLOT 2 */}
        {/* ------------------------------------------------- */}
        <h3 className="text-lg font-semibold mt-10 mb-2">Slot 2</h3>

        {/* Session 6 */}
        <TableHeading
          track="Track: Vision Computing"
          session="6"
          timing="04:30 PM to 06:00 PM"
          venue="B-105"
        />
        <PaperTable
          papers={[
            { id: 947, name: "VitraFit - AI-Powered Vision for Smarter Fitness" },
            { id: 957, name: "Semantic-Aware & Geometry-Consistent Instant3D for Text-Driven Anatomical Model Reconstruction" },
            { id: 1003, name: "Hybrid ResNeXt-101 & LSTM for Deepfake Detection in Videos" },
            { id: 319, name: "Hybrid Deep Learning Model for Image Dehazing & Object Detection" },
            { id: 890, name: "Lightweight Driver Drowsiness Detection Using MobileNetV2" },
            { id: 921, name: "Vision Transformers for Classifying Intracerebral Hemorrhage in CT Images" },
            { id: 1018, name: "Multi-Angle Classification of Tree Species from UAV Images" }
          ]}
        />
        {/* Session 7 */}
        <TableHeading
          track="Track: Cybersecurity and Forensics"
          session="7"
          timing="04:30 PM to 06:00 PM"
          venue="B-106"
        />
        <PaperTable
          papers={[
            { id: 37, name: "An Ensemble Voting Model for Phishing Website Detection Using Machine Learning Algorithms" },
            { id: 346, name: "Posture Management in Zero Trust Container Framework" },
            { id: 347, name: "Audit and Compliance in Zero Trust Container Framework" },
            { id: 372, name: "Authazon: Authorization of Amazon Data using a Category Based Access Control Model" },
            { id: 675, name: "Secure Log Ingestion and Visualization Using Dockerized Graylog with Multiple Log Shippers" },
            { id: 951, name: "Secure Key Association, Forger Identification and Dealer Forgery Detection for a (t,n) Threshold Setup" },
            { id: 393, name: "FS-ProtoNet: Enterprise Network Security using Few-Shot Learning with Prototypical Networks" },
            { id: 564, name: "Loan Eligibility Prediction: A Comparative Analysis using Machine Learning Algorithms" }
          ]}
        />

        {/* Session 8 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="8"
          timing="04:30 PM to 06:00 PM"
          venue="B-107"
        />
        <PaperTable
          papers={[
            { id: "376*", name: "Smart Crop Health Monitoring: Automated Detection of Potato Leaf Diseases" },
            { id: 398, name: "Multi-Label Classification via Sparse Twin Extreme Learning Machine" },
            { id: 568, name: "Comparative Evaluation of YOLOv8 Variants on Aerial Object Detection with DOTAv1.5" },
            { id: 581, name: "Logistic Regression Optimized with Gradient Descent and Expectation-Maximization for Heart Disease Prediction" },
            { id: 611, name: "A Novel Hybrid Framework for Day-Ahead Load Forecasting Integrating CBAM, TCN, and XGBoost" },
            { id: 617, name: "Evolutionary State and Dual Sub-Swarm Assisted Particle Swarm Optimization for Image Thresholding" },
            { id: 626, name: "A LLM-Powered Approach for Generating Meeting Minutes from Audio Conversations" },
            { id: 660, name: "EmpaAI: Intelligent Query-Based Mental Health Assistance" }
          ]}
        />

        {/* Session 9 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="9"
          timing="04:30 PM to 06:00 PM"
          venue="B-207"
        />
        <PaperTable
          papers={[
            { id: 123, name: "Thyroid Lumps Detection in Ultrasound Images Utilizing Multi-View Deep Learning Approach" },
            { id: 321, name: "WBPA-QA (Water Body Property Analyzer for Quality Assessment)" },
            { id: 358, name: "Water Quality Classification Using LightGBM: A Machine Learning Approach on a Large-Scale Dataset" },
            { id: 367, name: "Leveraging Siamese Neural Network Architectures for Detection and Classification of Zero-Day Botnet Network Traffic" },
            { id: 442, name: "A Graph-Based Method to Reveal Communities and Influential Products from Reviews through Stylometric Analysis" },
            { id: 457, name: "Enhancing Pairs Trading with Graph Neural Network-Based Pair Selection" },
            { id: 551, name: "Yoga Pose Detection and Classification using Advanced Machine Learning Models" },
            { id: 561, name: "A PSO-Optimized CNN-BiLSTM Model for Enhanced Gesture Classification from Multichannel Surface EMG Signals" }
          ]}
        />

        {/* Session 10 */}
        <TableHeading
          track="Track: Computer and Software Systems"
          session="10"
          timing="04:30 PM to 06:00 PM"
          venue="B-208"
        />
        <PaperTable
          papers={[
            { id: 5, name: "Efficient Personalized Recommendation Systems Using Graph Databases: Techniques, and Sustainable Practices" },
            { id: 152, name: "Overengineering BRC: Distributed-System Solution for Automating Compute-Heavy Data-Processing Competitions" },
            { id: 362, name: "Design and Implementation of an Advanced Continuous Monitoring System for Real-Time Performance Analytics" },
            { id: 749, name: "A Posture-Based System for Student Concentration Estimation" },
            { id: 757, name: "Development of Big Data Visualization Platform Integrating Medical, Air Quality, and Meteorological Data" },
            { id: 932, name: "Fork vs Pthreads: A Quantitative Microarchitectural Comparison for Real-Time CPU-Based ML Inference" }
          ]}
        />

        {/* End of Day 1 */}
        <div className="mt-8 mb-12 text-sm italic">***END OF DAY-1***</div>

        {/* ------------------------------------------------- */}
        {/* Day 2 will follow in Part 3 */}
        {/* ------------------------------------------------- */}
        {/* ------------------------------------------------- */}
        {/* -------------------- DAY 2 ---------------------- */}
        {/* ------------------------------------------------- */}
        <h2 className="text-xl font-bold mt-10 mb-4">Day 2 (20/12/2025)</h2>

        {/* ------------------------------------------------- */}
        {/* SLOT 3 */}
        {/* ------------------------------------------------- */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Slot 3</h3>

        {/* Session 11 */}
        <TableHeading
          track="Track: Cybersecurity and Forensics"
          session="11"
          timing="09:30 AM to 11:00 AM"
          venue="B-105"
        />
        <PaperTable
          papers={[
            { id: 233, name: "Netra: An AI-Powered Cybercrime Reporting and Analysis System" },
            { id: 263, name: "Financial Data Security in QR Codes Using Steganography and Digital Signatures" },
            { id: 588, name: "AI-Driven Deepfake Detection" },
            { id: 670, name: "Enhancing Credit Card Transaction Security Using Supervised and Unsupervised ML Techniques" },
            { id: 685, name: "Real-Time Container Threat Detection and Response using Falco, VirusTotal and Talon" },
            { id: 873, name: "Enhanced cyber attack detection with IDS using Jaya Optimizer and SMOTE-ENN" },
            { id: "948*", name: "The Alchemy of Assurance: Foundational Logics in Security and Privacy" },
            { id: "977*", name: "AEP-M: AI-Enhanced Anonymous E-Payment for Mobile Devices using ARM Trust Zone and Divisible E-Cash" }
          ]}
        />

        {/* Session 12 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="12"
          timing="09:30 AM to 11:00 AM"
          venue="B-106"
        />
        <PaperTable
          papers={[
            { id: 129, name: "Recognition of Parkinson's Disease Utilizing Machine Learning" },
            { id: 139, name: "Image Description Generator for Visually Impaired Individual" },
            { id: 165, name: "Mango Variety Recognition: Improving Image-Based Classification for Quality Control" },
            { id: 197, name: "Human Activity Recognition Using Hybrid Attention + TCN With Sensor Fusion" },
            { id: 262, name: "Hierarchical Deep Learning Framework for Robust Lung Disease Prediction via X-rays" },
            { id: 277, name: "Comparative Study on Subgraph Mining Approaches for Parkinson’s Detection Using GCN" },
            { id: 289, name: "Smart Agriculture Information Retrieval using ML-Based Query Expansion & Knowledge Graphs" },
            { id: 344, name: "Auditing Chain-of-Thought Reasoning via Perturbation-Based Attribution" }
          ]}
        />

        {/* Session 13 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="13"
          timing="09:30 AM to 11:00 AM"
          venue="B-107"
        />
        <PaperTable
          papers={[
            { id: 574, name: "Leukocytes Classification using ViT from Blood Smear Image" },
            { id: 578, name: "Early Prediction of Student Dropout Using Machine Learning Models" },
            { id: 585, name: "KPPENet: Lightweight C2f + Self-Attention Based Network for Tiger Keypoint Pose Estimation" },
            { id: 612, name: "Enhanced Diabetes Prediction on PIMA Data using SMOTE, HPO, and Ensembles" },
            { id: 616, name: "Evaluating Hyperparameter Sensitivity Across DL Architectures" },
            { id: 619, name: "Lightweight Detection Architecture for Real-Time Medical Pill Recognition" },
            { id: 629, name: "Next-Gen Satellite Imaging: Optimizing High-Resolution Sensing via Stabilization & Processing" },
            { id: 651, name: "GaitStruct: Enhanced Human Recognition via Edge Structure Detection in Gait Analysis" }
          ]}
        />

        {/* Session 14 */}
        <TableHeading
          track="Track: Communication Networks"
          session="14"
          timing="09:30 AM to 11:00 AM"
          venue="B-207"
        />
        <PaperTable
          papers={[
            { id: 177, name: "Performance Evaluation of AI-based Algorithms for 5G RAN Slicing" },
            { id: 189, name: "Detecting Switch Spoofing Attacks in SDN using DPID Detection Mechanism" },
            { id: 377, name: "Between the Cores: Covert Communication in Modern Cloud Workloads" },
            { id: 488, name: "UE Assisted Avoidance of False Negative Blacklisted Duplicate IMEIs" },
            { id: 490, name: "SVD-LMMSE Based Channel Estimation for Massive MIMO Systems" },
            { id: 900, name: "Cloud Service Insurance: Actuarial Model for Reliable Consumer Delivery" },
            { id: 997, name: "Secure Key Exchange & Wormhole Attack Prevention in Wireless Ad-Hoc Networks" },
            { id: 1002, name: "Blockchain-Based Tokenization of Land Documents for Secure Ownership & Transfer" }
          ]}
        />

        {/* Session 15 */}
        <TableHeading
          track="Track: Cyber Physical Systems and IoT"
          session="15"
          timing="09:30 AM to 11:00 AM"
          venue="B-208"
        />
        <PaperTable
          papers={[
            { id: 192, name: "Object Detection and Sorting of Airport Baggage Using LabVIEW and Arduino" },
            { id: "285*", name: "Automated Fire Detection & Suppression System for Railway Safety using LabVIEW + GSM" },
            { id: 323, name: "Fish Farm Water Quality Monitoring System Using IoT" },
            { id: 327, name: "Smart IoT Emergency Response System with Real-Time Health Monitoring" },
            { id: 356, name: "Smart Home Automation: Arduino-Based Alexa-Controlled System" },
            { id: 363, name: "IoT-Integrated Geospatial Analytics for Automated Farmland Estimation" },
            { id: 522, name: "Smart Socket for Energy Efficiency" },
            { id: 559, name: "Multi-Modal Edge Computing for Real-Time Landslide Early Warning" }
          ]}
        />

        {/* ------------------------------------------------- */}
        {/* SLOT 4 */}
        {/* ------------------------------------------------- */}
        <h3 className="text-lg font-semibold mt-10 mb-2">Slot 4</h3>

        {/* Session 16 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="16"
          timing="03:30 PM to 05:00 PM"
          venue="B-105"
        />
        <PaperTable
          papers={[
            { id: 666, name: "Hybrid Deep Learning Fusion for Enhanced Cervical Cancer Classification" },
            { id: 604, name: "Recommendation System-based E-Commerce Website Using ML" },
            { id: 674, name: "Quantifying Explanation Accuracy of LIME and SHAP" },
            { id: 727, name: "Expert-Agnostic AI for Intelligent Tutoring via Self-Supervised Knowledge Mining" },
            { id: 871, name: "Predictive Modeling of Body Fat % Using ML Techniques" },
            { id: 875, name: "Explainable Deep Learning for Skin Lesion Classification Using EfficientNetV2 + Grad-CAM++" },
            { id: 892, name: "Adapter-Tuned IndicBERT for Hate & Source Detection in Code-Mixed Indic Texts" },
            { id: 894, name: "Robust CLIP-Based Multimodal Fake News Detection in Noisy Social Media" }
          ]}
        />

        {/* Session 17 */}
        <TableHeading
          track="Track: Robotics and Autonomous Systems"
          session="17"
          timing="03:30 PM to 05:00 PM"
          venue="B-106"
        />
        <PaperTable
          papers={[
            { id: 253, name: "Sequential & Parallel Strategies for IRB 140 Dynamics via Symbolic & Numerical Simulation" },
            { id: 539, name: "Fail-Safe Lane Detection (CACC) Using LiDAR-Only Approach" },
            { id: 610, name: "Voronoi Heuristic-Driven Multi-Objective Optimization in Motion Planning" },
            { id: 702, name: "Sensor-Fused Semi-Autonomous Rover For Safe Rescue Mission" },
            { id: 738, name: "Smart IoT-Enabled Portable Health Monitoring System for Real-Time Medical Use" },
            { id: 896, name: "Portable AI-Based Support System for Alzheimer’s Detection using NLP on Raspberry Pi" },
            { id: 909, name: "SUFS: IoT Based Urban Crop Health & Irrigation System" }
          ]}
        />

        {/* Session 18 */}
        <TableHeading
          track="Track: Computer and Software Systems"
          session="18"
          timing="03:30 PM to 05:00 PM"
          venue="B-107"
        />
        <PaperTable
          papers={[
            { id: "81*", name: "Enhancing Cybersecurity Risk Management Across SDLC" },
            { id: 298, name: "DASIA: Intelligent Examination System for Academics" },
            { id: 679, name: "Blockchain-Based Decentralized App Connecting Farmers & Consumers" },
            { id: "723*", name: "Attention-Based Enhanced SqueezeNet for Cervical Cancer Screening" },
            { id: 782, name: "Behind the Pixels: Unveiling Deepfake Videos" },
            { id: 855, name: "AI Agentic Systems w/ Microservices: Bridging SE Lifecycle Gaps" },
            { id: 856, name: "Performance Analysis of a Generalized Card Trick Algorithm" },
            { id: "976*", name: "Decentralized Payment Optimization for Scalable Microservice Transactions" }
          ]}
        />

        {/* Session 19 */}
        <TableHeading
          track="Track: Emerging Computing Technologies and Systems"
          session="19"
          timing="03:30 PM to 05:00 PM"
          venue="B-207"
        />
        <PaperTable
          papers={[
            { id: 159, name: "Optimization Techniques with Numerical Simulation of PDE Using RBF" },
            { id: 169, name: "Innovative Thermal Design: Nature-Inspired Cooling in Supercomputing" },
            { id: 208, name: "Overview of Techniques for Osteosarcoma Detection in Blockchain Systems" },
            { id: 620, name: "LightGBM-SHAP Framework for Interpretable Crop Yield Prediction" },
            { id: 886, name: "Optimizing Operational Costs via Linear Programming in Resource-Limited Environments" },
            { id: 995, name: "Position-Specific Mutation Framework for Severity Prediction in Hemophilia-B" },
            { id: 1012, name: "Study on Quantum Image Representation Schemes: Comparative Analysis" }
          ]}
        />

        {/* End of Day 2 */}
        <div className="mt-8 mb-12 text-sm italic">***END OF DAY-2***</div>

      </div> {/* container end */}

      <Footer />
    </>
  );
}

export default Schedule;

