import { Footer, Navbar } from "../components/index.js";
import schedule from "../assets/ReACS 2025 Conference Oral presentation Schedule.pdf";
import overall from "../assets/Final overall.pdf";
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
          Overall Program Schedule
        </div>
        <div className="mt-5">
          <a
            href={overall}
            target="_blank"
            className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">
              Overall Schedule
            </span>
          </a>
        </div>
        <div className="mt-5 text-2xl font-semibold mb-6">
          Oral Paper Presentation Schedule
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

        {/* ------------------------------------------------- */}
        {/* OVERALL PROGRAM SCHEDULE (FULL TABLES) */}
        {/* ------------------------------------------------- */}

        <h2 className="text-2xl font-bold mt-10 mb-4">Overall Program Schedule</h2>

        {/* --- DAY 1 TABLE --- */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] border-collapse w-full text-sm">
            <thead>
              <tr className="bg-gray-200 font-semibold">
                <th className="border p-2 w-32">Day</th>
                <th className="border p-2">Friday, December 19, 2025</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className="border p-2 font-semibold">Time</td>
                <td className="border p-2 font-semibold">Activity</td>
              </tr>

              <tr>
                <td className="border p-2">09:00–09:30</td>
                <td className="border p-2">
                  <b>Registration</b><br />
                  LT-1, Room no. 105
                </td>
              </tr>

              <tr>
                <td className="border p-2">10:00–11:00</td>
                <td className="border p-2">
                  <b>Inauguration</b><br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:00–11:30</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:30–12:30</td>
                <td className="border p-2">
                  <b>Keynote</b><br />
                  "Cross-Layer and Waveform-Aware Routing Protocol for Autonomous UAV Networks"<br />
                  Prof. Sunil Kumar<br />
                  Professor, Dept. of Electrical and Computer Engineering,<br />
                  San Diego State University, CA, USA<br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">12:30–14:00</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 1</td>
              </tr>

              {/* SLOT 1 SUBTABLE */}
              <tr>
                <td className="border p-2" />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">1</th>
                          <th className="border p-2">2</th>
                          <th className="border p-2">3</th>
                          <th className="border p-2">4</th>
                          <th className="border p-2">5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">Vision Computing</td>
                          <td className="border p-2">Vision Computing</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Emerging Computing Technologies and Systems</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                          <td className="border p-2">LT-1, 208</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">14:00–15:00</td>
                <td className="border p-2">
                  <b>Lunch Break</b><br />
                  Department of CSE, Ground Floor
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">15:00–16:30</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 2</td>
              </tr>

              {/* SLOT 2 SUBTABLE */}
              <tr>
                <td className="border p-2" />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">6</th>
                          <th className="border p-2">7</th>
                          <th className="border p-2">8</th>
                          <th className="border p-2">9</th>
                          <th className="border p-2">10</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">Vision Computing</td>
                          <td className="border p-2">Cybersecurity and Forensics</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Computer and Software Systems</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                          <td className="border p-2">LT-1, 208</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">16:30–17:00</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr>
                <td className="border p-2">19:30</td>
                <td className="border p-2">
                  <b>Welcome Dinner</b><br />
                  Convention Centre
                </td>
              </tr>

            </tbody>
          </table>
        </div>


        {/* --- DAY 2 TABLE --- */}
        <div className="overflow-x-auto mt-12">
          <table className="min-w-[900px] border-collapse w-full text-sm">
            <thead>
              <tr className="bg-gray-200 font-semibold">
                <th className="border p-2 w-32">Day</th>
                <th className="border p-2">Saturday, December 20, 2025</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Time</td>
                <td className="border p-2 font-semibold">Activity</td>
              </tr>

              <tr>
                <td className="border p-2">09:00–09:30</td>
                <td className="border p-2">
                  <b>Registration</b><br />
                  LT-1, Room no. 105
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">09:30–11:00</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 3</td>
              </tr>

              {/* SLOT 3 TABLE */}
              <tr>
                <td />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">11</th>
                          <th className="border p-2">12</th>
                          <th className="border p-2">13</th>
                          <th className="border p-2">14</th>
                          <th className="border p-2">15</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">Cybersecurity & Forensics</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Communication Networks</td>
                          <td className="border p-2">Cyber Physical Systems & IoT</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                          <td className="border p-2">LT-1, 208</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:00–11:30</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:30–13:00</td>
                <td className="border p-2">
                  <b>Tutorial</b><br />
                  "Emerging Cybercrime Trends and Threats"<br />
                  Mr. Gurcharan Singh<br />
                  Central Detective Training Institute, Chandigarh<br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr>
                <td className="border p-2">13:00–14:00</td>
                <td className="border p-2">
                  <b>Lunch Break</b><br />
                  Department of CSE, Ground Floor
                </td>
              </tr>

              <tr>
                <td className="border p-2">14:00–15:00</td>
                <td className="border p-2">
                  <b>Keynote</b><br />
                  "The Generative Shift: AI at Work"<br />
                  Mr. Diptiman Purbe<br />
                  Uber<br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr>
                <td className="border p-2">15:00–15:30</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">15:30–17:00</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 4</td>
              </tr>

              {/* SLOT 4 SUBTABLE */}
              <tr>
                <td />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">16</th>
                          <th className="border p-2">17</th>
                          <th className="border p-2">18</th>
                          <th className="border p-2">19</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Robotics & Autonomous Systems</td>
                          <td className="border p-2">Computer and Software Systems</td>
                          <td className="border p-2">Emerging Computing Technologies and Systems</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">17:00–18:00</td>
                <td className="border p-2">
                  <b>Valedictory Ceremony</b><br />
                  LT-1, Room no. 211
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------- */}
        {/* END OF OVERALL SCHEDULE */}
        {/* ------------------------------------------------- */}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">Important Information</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Registration Desk: Open daily from 9:00 AM</li>
            <li>
              Conference Website:{" "}
              <a
                href="https://reacs2025.iiitm.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://reacs2025.iiitm.ac.in/
              </a>
            </li>
            <li>
              For paper presentation schedule, see Oral Presentation Schedule at the
              website
            </li>
          </ul>
        </div>



        <h2 className="text-2xl font-bold mt-10 mb-4">Oral Paper Presentation Schedule</h2>
        {/* -------------------- DAY 1 ---------------------- */}
<h2 className="text-2xl font-bold mt-10 mb-4">Day 1 (19/12/2025)</h2>

        <h3 className="text-xl font-semibold mt-8 mb-3">Slot 1</h3>
        <TableHeading
          track="Track: Vision Computing"
          session="1"
          timing="12:30 PM – 02:30 PM"
          venue="LT-1, 108"
        />

        <PaperTable
          papers={[
            { id: 290, name: "Deep Learning for Skin Disease Classification Using Smartphone Images and Clinical Metadata" },
            { id: 365, name: "Investigation of InceptionV3 architecture-based feature extraction and different classifiers for Pneumonia disease using Chest X-Ray Images" },
            { id: 958, name: "Sound Event Detection using YOHO and Bottleneck Attention" },
            { id: 70, name: "Advances in Neuroimaging Techniques for Detection and Monitoring Intracranial Hemorrhage" },
            { id: 226, name: "American Sign Language Recognition Using Deep Learning for Static Gesture Classification" },
            { id: 228, name: "Method Noise Filter based Multi focus Image Fusion Using CNN" },
            { id: 301, name: "Optimizing EdgeML Image Denoising with PnP-ADMM, Quantization, and Pruning" },
            { id: 676, name: "Automated Segmentation of Unruptured Intracranial Aneurysms from TOF-MRA using Generative Adversarial Networks" }
          ]}
        />

        <TableHeading
          track="Track: Vision Computing"
          session="2"
          timing="12:30 PM – 02:15 PM"
          venue="LT-1, 106"
        />
        <PaperTable
          papers={[
            { id: 406, name: "Real-Time Proctoring System for Online Examinations Using MediaPipe Framework" },
            { id: 537, name: "Image Captioning with Gated Fusion Transformer and Dynamic Encoder Adaptation" },
            { id: 445, name: "Video Retrieval Using GAT Enhanced CLIP Model" },
            { id: 582, name: "Framework for Gym Posture Estimation using MediaPipe and OpenCV" },
            { id: 607, name: "Enhanced Whale Optimization Algorithm Integrated with Deep Learning-Based Edge Detection" },
            { id: 654, name: "Real-Time Analog Gauge Digitization Using 3D SegFormer & Physics-Guided Neural Rendering" },
            { id: 987, name: "LexiBoost: AI-Powered Automated Essay Scoring System" },
            { id: "-", name: "Deep Learning-Based Multi-Angle Classification of Tree Species from UAV Images" }
          ]}
        />

        <TableHeading
          track="Track: AI and Data Science"
          session="3"
          timing="12:30 PM – 02:30 PM"
          venue="LT-1, 107"
        />
        <PaperTable
          papers={[
            { id: 150, name: "Predictive Analytics for Youth Mental Health Using ML" },
            { id: 275, name: "Deep Spectrogram-Based EEG Decoding Using Novel CNN" },
            { id: 276, name: "Dynamic Risk Stratification in ICU Sepsis Using Deep RL" },
            { id: 269, name: "Metaheuristic Algorithms for Multiple Sequence Alignment of rpoB Genes" },
            { id: 282, name: "Forecasting S&P 500 Using Open-AI Transformer Models" },
            { id: 288, name: "Optimized ADMET-Driven Molecular Design Using GRU-GCN" },
            { id: 293, name: "Deep Learning Models for Skin Cancer Detection" },
            { id: 274, name: "RAG-based Explainable Fact-Checking with Knowledge Graphs" }
          ]}
        />

        <TableHeading
          track="Track: AI and Data Science"
          session="4"
          timing="12:30 PM – 02:30 PM"
          venue="LT-1, 207"
        />
        <PaperTable
          papers={[
            { id: 335, name: "Framework for Deepfake Text Detection Using Ensemble Models" },
            { id: 341, name: "Ensemble-Based Diabetic Retinopathy Detection (CNN + RF + AdaBoost)" },
            { id: 414, name: "Nutritional Profiling Using EfficientNetB0, MobileNetV2, ResNet50" },
            { id: 415, name: "Cross-Lingual Commonsense Reasoning Using XLM-R" },
            { id: 424, name: "Brain Tumor Classification from MRI Using Hybrid DL Models" },
            { id: 432, name: "Multimodal Social Media Sentiment Analysis Using Vision-Language Transformers" },
            { id: 529, name: "Hierarchical BiLSTM with Attention for Text Summarization" },
            { id: 549, name: "Thermal Feature-Based Subclinical Mastitis Detection using SVM" }
          ]}
        />
        <TableHeading
          track="Track: Emerging Computing Technologies and Systems"
          session="5"
          timing="12:30 PM – 02:00 PM"
          venue="LT-1, 208"
        />

        <PaperTable
          papers={[
            { id: 283, name: "A Multistage Pipeline for Generating Symbolic Music with Deep Learning Architectures" },
            { id: 305, name: "Predicting Droughts Smarter: How We Built an End-to-End MLOps Pipeline" },
            { id: 618, name: "Video Game Addiction, Mental Health, and Social Well-being through Structural Equation Modeling" },
            { id: 678, name: "A Hybrid Identity Authentication System using Deep Learning for Biometric and Facial Recognition" },
            { id: 972, name: "A UTAUT Analysis of Mobile Banking Adoption in India's Next-Gen Digital Services" },
            { id: 983, name: "AI Integration & Its Dual Impact on Economic Growth and CO2 Emissions" }
          ]}
        />

        {/* ------------------------------------------------- */}
        {/* DAY 1 — SLOT 2 (03:00 PM to 04:30 PM) */}
        {/* ------------------------------------------------- */}

        <h3 className="text-lg font-semibold mt-10 mb-2">Slot 2</h3>

        {/* SESSION 6 — Vision Computing */}
        <TableHeading
          track="Track: Vision Computing"
          session="6"
          timing="03:00 PM to 04:45 PM"
          venue="LT-1, 108"
        />

        <PaperTable
          papers={[
            { id: 947, name: "VitraFit - AI-Powered Vision for Smarter Fitness" },
            { id: 957, name: "Semantic-Aware and Geometry-Consistent Instant3D for Text-Driven Anatomical Model Reconstruction" },
            { id: 1003, name: "A Hybrid ResNeXt-101 & LSTM framework for Spatiotemporal Deepfake Detection in Video Sequences" },
            { id: 319, name: "A Hybrid Deep Learning Model for Image Dehazing and Object Detection to Enhance Autonomous Vehicle Navigation" },
            { id: 890, name: "Realistic and Lightweight Driver Drowsiness Detection Using MobileNetV2 Features and Logistic Regression with Noise-Robust Learning" },
            { id: 921, name: "Deep Learning with Vision Transformers for Classifying Intracerebral Hemorrhage in CT Images" },
            { id: 1018, name: "Deep Learning-Based Multi-Angle Classification of Tree Species from UAV Images" }
          ]}
        />

        {/* SESSION 7 — Cybersecurity and Forensics */}
        <TableHeading
          track="Track: Cybersecurity and Forensics"
          session="7"
          timing="03:00 PM to 05:15 PM"
          venue="LT-1, 106"
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
            { id: 564, name: "Loan Eligibility Prediction: A Comparative Analysis using Machine Learning Algorithms" },
            { id: 776, name: "Neuro-Fuzzy IDS with MRMR Feature Selection and Adaptive Ensemble Correction" }
          ]}
        />

        {/* SESSION 8 — AI & Data Science */}
        <TableHeading
          track="Track: AI and Data Science"
          session="8"
          timing="03:00 PM to 05:00 PM"
          venue="LT-1, 107"
        />

        <PaperTable
          papers={[
            { id: 376, name: "Smart Crop Health Monitoring: Automated Detection of Potato Leaf Diseases" },
            { id: 398, name: "Multi-Label Classification via Sparse Twin Extreme Learning Machine" },
            { id: 457, name: "Enhancing Pairs Trading with Graph Neural Network-Based Pair Selection" },
            { id: 568, name: "Comparative Evaluation of YOLOv8 Variants on Aerial Object Detection with DOTAv1.5" },
            { id: 581, name: "Logistic Regression Optimized with Gradient Descent and Expectation-Maximization for Heart Disease Prediction" },
            { id: 617, name: "Evolutionary State and Dual Sub-Swarm Assisted Particle Swarm Optimization for Image Thresholding Problem" },
            { id: 626, name: "A LLM-Powered Approach for Generating Meeting Minutes from Audio Conversations" },
            { id: 660, name: "EmpaAI: Intelligent Query-Based Mental Health Assistance" }
          ]}
        />

        {/* SESSION 9 — AI & Data Science */}
        <TableHeading
          track="Track: AI and Data Science"
          session="9"
          timing="03:00 PM to 05:15 PM"
          venue="LT-1, 207"
        />

        <PaperTable
          papers={[
            { id: 123, name: "Thyroid Lumps Detection in Ultrasound Images Utilizing Multi-View Deep Learning Approach" },
            { id: 321, name: "WBPA-QA (Water Body Property Analyzer for Quality Assessment)" },
            { id: 358, name: "Water Quality Classification Using LightGBM: A Machine Learning Approach on a Large-Scale Dataset" },
            { id: 367, name: "Leveraging Siamese Neural Network Architectures for the Detection and Classification of Zero-Day Botnet Network Traffic Analysis" },
            { id: 391, name: "Electrolyte Imbalance Detection via ECG Using Machine Learning and Deep Learning Approaches – A Comparative Study" },
            { id: 442, name: "A Graph-Based Method to Reveal Communities and Influential Products from Reviews through Stylometric Analysis" },
            { id: 551, name: "Yoga Pose Detection and Classification using Advanced Machine Learning Models" },
            { id: 561, name: "A PSO-Optimized CNN-BiLSTM Model for Enhanced Gesture Classification from Multichannel Surface EMG Signals" },
            { id: 611, name: "A Novel Hybrid Framework for Day-Ahead Load Forecasting Integrating CBAM, TCN, and XGBoost for Developing Regions" }
          ]}
        />

        {/* SESSION 10 — Computer & Software Systems */}
        <TableHeading
          track="Track: Computer and Software Systems"
          session="10"
          timing="03:00 PM to 04:30 PM"
          venue="LT-1, 208"
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

        {/* ------------------------------------------------- */}
        {/* DAY 2 — SLOT 3 */}
        {/* ------------------------------------------------- */}
        {/* -------------------- DAY 2 ---------------------- */}
<h2 className="text-2xl font-bold mt-10 mb-4">Day 2 (19/12/2025)</h2>


        <h3 className="text-lg font-semibold mt-6 mb-2">Slot 3</h3>

        {/* Session 11 */}
        <TableHeading
          track="Track: Cybersecurity and Forensics"
          session="11"
          timing="09:30 AM to 11:30 AM"
          venue="LT-1, 108"
        />

        <PaperTable
          papers={[
            { id: 233, name: "Netra: An AI-Powered Cybercrime Reporting and Analysis System" },
            { id: 263, name: "Financial Data Security in QR Codes Using Steganography and Digital Signatures" },
            { id: 547, name: "A Sustainable Model of Security Automation: Approach and Analysis" },
            { id: 588, name: "AI-Driven Deepfake Detection" },
            { id: 670, name: "Enhancing Credit Card Transaction Security Using Supervised and Unsupervised Machine Learning Techniques" },
            { id: 685, name: "Real-Time Container Threat Detection and Response using Falco, VirusTotal and Talon" },
            { id: 873, name: "Enhanced cyber attack detection with IDS using jaya optimizer and smote ENN" },
            { id: 948, name: "The Alchemy of Assurance: Foundational Logics in Security and Privacy" }
          ]}
        />


        {/* Session 12 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="12"
          timing="09:30 AM to 11:30 AM"
          venue="LT-1, 106"
        />

        <PaperTable
          papers={[
            { id: 129, name: "Recognition of Parkinson's Disease Utilizing Machine Learning" },
            { id: 139, name: "Image Description Generator for Visually Impaired Individual" },
            { id: 165, name: "Mango Variety Recognition: Improving Image Based Classification for Quality Control" },
            { id: 197, name: "Human Activity Recognition Based on a Hybrid Attention and TCN Model With Sensor Fusion" },
            { id: 262, name: "Hierarchical Deep Learning Framework for Robust Lung Disease Prediction through Chest X-rays" },
            { id: 277, name: "A Comparative Study on Subgraph Mining Approaches for Parkinson’s Disease Detection Using GCN" },
            { id: 289, name: "Smart Agricultural Information Retrieval through Machine Learning-Driven Query Expansion and Semantic Knowledge Graphs" },
            { id: 344, name: "Auditing Chain-of-Thought Reasoning via Perturbation-Based Attribution" }
          ]}
        />


        {/* Session 13 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="13"
          timing="09:30 AM to 11:30 AM"
          venue="LT-1, 107"
        />

        <PaperTable
          papers={[
            { id: 574, name: "Leukocytes Classification using ViT from Blood Smear Image" },
            { id: 578, name: "Early Prediction of Student Dropout in Higher Education Using Machine Learning Models" },
            { id: 585, name: "KPPENet: A lightweight C2f and Self-Attention Based Network for Accurate Tiger Key Point Pose Estimation" },
            { id: 612, name: "Enhanced Diabetes Prediction on PIMA Indian Data: Leveraging SMOTE, Hyperparameter Tuning and Ensemble Learning" },
            { id: 616, name: "Evaluating Hyper parameter Sensitivity Across Deep Learning Architectures" },
            { id: 619, name: "A Lightweight Detection Architecture for Real-Time Medical Pill Recognition" },
            { id: 629, name: "Next-Gen Satellite Imaging: Optimizing High-Resolution Remote Sensing with Advanced Stabilization and Data Processing" },
            { id: 651, name: "GaitStruct: Enhanced Human Recognition Through Edge Structure Detection in Visual Gait Analysis" }
          ]}
        />


        {/* Session 14 */}
        <TableHeading
          track="Track: Communication Networks"
          session="14"
          timing="09:30 AM to 11:30 AM"
          venue="LT-1, 207"
        />

        <PaperTable
          papers={[
            { id: 177, name: "Performance Evaluation of AI-based Algorithms for 5G RAN Slicing" },
            { id: 377, name: "Between the Cores: Covert Communication in Modern Cloud Workloads" },
            { id: 488, name: "UE Assisted Avoidance and Bypassing of False Negative Blacklisted Duplicate IMEIs in Mobile Communication Networks" },
            { id: 490, name: "SVD LMMSE Based Channel Estimation for Massive MIMO Systems" },
            { id: 189, name: "Detecting Switch Spoofing Attacks in SDN using DPID Detection Mechanism" },
            { id: 900, name: "Cloud Service Insurance: an Actuarial approach to ensure quality delivery for Consumers" },
            { id: 997, name: "Secure Key Exchange and Wormhole Attack Prevention in Wireless Ad-Hoc Networks" },
            { id: 1002, name: "Blockchain-Based Tokenization and Management of Land Documents" }
          ]}
        />


        {/* Session 15 */}
        <TableHeading
          track="Track: Cyber Physical Systems and IoT"
          session="15"
          timing="09:30 AM to 11:30 AM"
          venue="LT-1, 208"
        />

        <PaperTable
          papers={[
            { id: 192, name: "Object Detection and Sorting of Airport Baggage Using LabVIEW and Arduino with VISA Communication" },
            { id: "285*", name: "Automated Fire Detection and Suppression System for Railway Safety Using LabVIEW and GSM" },
            { id: 323, name: "Fish Farm Water Quality Monitoring System Using IoT" },
            { id: 363, name: "IoT-Integrated Geospatial Analytics for Automated Farmland Area Estimation Using Machine Learning" },
            { id: 559, name: "Multi-Modal Edge Computing for Real Time Landslide Early Warning System" },
            { id: 327, name: "Smart IoT Emergency Response System with Real-Time Health Monitoring" },
            { id: 356, name: "Smart Home Automation: Arduino-Based Amazon Alexa Controlled System" },
            { id: 522, name: "Smart Socket for Energy Efficiency" }
          ]}
        />

        {/* ------------------------------------------------- */}
        {/* SLOT 4 — DAY 2 */}
        {/* ------------------------------------------------- */}

        <h3 className="text-lg font-semibold mt-10 mb-2">Slot 4</h3>

        {/* Session 16 */}
        <TableHeading
          track="Track: AI and Data Science"
          session="16"
          timing="03:30 PM to 05:30 PM"
          venue="LT-1, 108"
        />
        <PaperTable
          papers={[
            { id: 674, name: "Quantifying Explanation Accuracy of LIME and SHAP Using Known Rule Based Feature Sets" },
            { id: 875, name: "Explainable Deep Learning for Multi-Class Skin Lesion Classification Using EfficientNetV2 and Grad-CAM++ Visualization." },
            { id: 894, name: "Robust CLIP-Based Multimodal Fake News Detection in Noisy Social Media Environments" },
            { id: 666, name: "Hybrid Deep Learning Model Fusion for Enhanced Cervical Cancer Identification and Classification" },
            { id: 604, name: "Recommendation System-based E-Commerce Website using Machine Learning Algorithms" },
            { id: 727, name: "Expert-Agnostic AI for Intelligent Tutoring Systems: Leveraging Self-Supervised Knowledge Mining" },
            { id: 871, name: "Predictive Modeling of Body Fat Percentage with Machine Learning Techniques" },
            { id: 892, name: "Adapter-Tuned IndicBERT for Hate and Source Detection in Code-Mixed Indic Texts" }
          ]}
        />

        {/* Session 17 */}
        <TableHeading
          track="Track: Robotics and Autonomous Systems"
          session="17"
          timing="03:30 PM to 05:30 PM"
          venue="LT-1, 106"
        />
        <PaperTable
          papers={[
            { id: 253, name: "Evaluation of Sequential and Parallel Strategies for IRB 140 Dynamics through Symbolic Derivation and Numerical Simulation" },
            { id: 539, name: "Fail-Safe Lane Detection for CACC: Overcoming Attacks and Communication Loss with a Novel LiDaR-Only Approach" },
            { id: 702, name: "Implementation of Sensor-Fused Semi-Autonomous Rover for Safe Rescue Mission and Terrain Mapping" },
            { id: 1009, name: "Development of Novel Flight Modes for Underwater Drones" },
            { id: 610, name: "Voronoi Heuristic-Driven Multi-Objective Optimization in Motion Planning" },
            { id: 738, name: "Smart IoT-Enabled Portable Health Monitoring System for Real-Time Medical Applications" },
            { id: 896, name: "Portable Artificial Intelligence-based Support System for Alzheimer’s Disease with NLP on Raspberry Pi" },
            { id: 909, name: "SUFS: IoT Based Urban Crop Health and Irrigation System" }
          ]}
        />

        {/* Session 18 */}
        <TableHeading
          track="Track: Computer and Software Systems"
          session="18"
          timing="03:30 PM to 05:15 PM"
          venue="LT-1, 107"
        />
        <PaperTable
          papers={[
            { id: 81, name: "Enhancing Cybersecurity Risk Management Across the Software Development Lifecycle" },
            { id: 298, name: "DASIA: An Intelligent Examination System for Academic Institutions" },
            { id: 679, name: "Blockchain based Decentralized Application Connecting the Farmers and Consumers" },
            { id: 723, name: "Attention-based Enhanced Squeeze-Net for Cervical Cancer Screening" },
            { id: 782, name: "Behind the Pixels: Unveiling Deepfake Videos" },
            { id: 855, name: "AI Agentic Systems with Microservices Architecture: Bridging Software Engineering Lifecycle Gaps in Large-Scale Applications" },
            { id: 856, name: "Performance Analysis of a Generalized Card Trick Algorithm: A Case Study in Algorithmic Optimization" }
          ]}
        />

        {/* Session 19 */}
        <TableHeading
          track="Track: Emerging Computing Technologies and Systems"
          session="19"
          timing="03:30 PM to 05:15 PM"
          venue="LT-1, 207"
        />
        <PaperTable
          papers={[
            { id: 159, name: "Optimization Techniques with Numerical Simulation of Partial Differential Equation through RBF" },
            { id: 169, name: "Innovative Thermal Design: How Nature Is Redefining Heat Management in Supercomputing" },
            { id: 208, name: "A detailed overview of various techniques for Osteosarcoma detection in Blockchain system" },
            { id: 620, name: "A LightGBM-SHAP Framework for Accurate and Interpretable Crop Yield Prediction" },
            { id: 886, name: "Optimizing Operational Costs in Resource-Limited Environments via Linear Programming" },
            { id: 995, name: "Application of Position-Specific Mutation Framework for Accurate and Efficient Severity Prediction in Hemophilia B" },
            { id: 1012, name: "Study on Quantum Image Representation Schemes: A Comparative Analysis" }
          ]}
        />





      </div> {/* container end */}

      <Footer />
    </>
  );
}

export default Schedule;

