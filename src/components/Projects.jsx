import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import agencyDashboard from "../assets/agency_level_dashboard.png";
import adminDashboard from "../assets/admin_dashboard.png";
import planabilityUser from "../assets/planability_user.png";
import capabilityParticipant from "../assets/capability_participant.png";
import capabilityAgencyDashboard from "../assets/capability_agency_dashboard.png";
import posabilityDashboard from "../assets/posability_dashboard.png";
import posabilityInvoiceCreate from "../assets/posability_invoice_create.png";
import ImageModal from "./parts/ImageModal";

const Projects = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mb-10">
      <h2 className="text-xl lg:text-3xl text-white font-semibold">Projects</h2>
      <div className="w-10 border-t-4 mt-3 border-orange-400"></div>

      {/* Projects */}
      <div className="mt-8 text-white flex flex-col gap-5">

        {/* Project 1 */}
        <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg ">
          <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300 shrink-0"></span>
          <div className="flex-1 min-w-0">
            <h2 className="lg:text-2xl font-semibold">Planability</h2>

            {/* Description */}
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li><strong>NDIS Plan Management:</strong> Supports the management of National Disability Insurance Scheme (NDIS) plans, participant budgets, and funding.</li>
                <li><strong>Claims & Payments:</strong> Helps plan managers create, review, submit, and track claims and payments.</li>
                <li><strong>Budget Tracking:</strong> Provides visibility into funding allocations, spending, and budget forecasts.</li>
                <li><strong>Service Agreements:</strong> Helps manage provider agreements and allocate funding to specific supports.</li>
                <li><strong>Participant Management:</strong> Organizes participant records, service providers, and access permissions.</li>
                <li><strong>Reporting & Administration:</strong> Simplifies financial reporting, monthly statements, and day-to-day plan management workflows.</li>
              </ul>
            </div>

            <p className="mt-2 text-sm">
              You can explore the official <a className="text-orange-300" href="https://help.plan-ability.com.au/knowledge">Planability website and help centre</a> for more details. Here are some screen shots of Planability:
            </p>

            <div className="mt-4 flex flex-col md:flex-row gap-4">
              {[adminDashboard, planabilityUser, agencyDashboard].map((src, i) => (
                <img
                  key={i}
                  className="w-full md:flex-1 md:min-w-0 h-48 sm:h-56 md:h-64 object-cover rounded-lg cursor-zoom-in"
                  src={src}
                  alt={`planability_screenshot_${i + 1}`}
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg ">
          <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300 shrink-0"></span>
          <div className="flex-1 min-w-0">
            <h2 className="lg:text-2xl font-semibold">Capability</h2>

            {/* Description */}
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Designed to help NDIS support coordinators manage participants and their support plans.</li>
                <li>Aims to simplify task management, caseload tracking, and participant administration.</li>
                <li>Supports funding oversight and billing-related workflows.</li>
                <li>Intended to reduce paperwork so coordinators can focus more on participant outcomes.</li>
              </ul>
            </div>

            <p className="mt-2 text-sm">Here are some screen shots of Capability:</p>

            <div className="mt-4 flex flex-col md:flex-row gap-4">
              {[capabilityAgencyDashboard, capabilityParticipant].map((src, i) => (
                <img
                  key={i}
                  className="w-full md:flex-1 md:min-w-0 h-48 sm:h-56 md:h-64 object-cover rounded-lg cursor-zoom-in"
                  src={src}
                  alt={`capability_screenshot_${i + 1}`}
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex items-start gap-6 p-6 rounded-xl bg-gray-800 transition duration-300 shadow-lg ">
          <span className="h-3 w-3 mt-2 bg-cyan-500 rounded-full border border-cyan-300 shrink-0"></span>
          <div className="flex-1 min-w-0">
            <h2 className="lg:text-2xl font-semibold">Posability</h2>

            {/* Description */}
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Simplifies invoice creation, approval, and claim submission for NDIS service providers.</li>
                <li>Supports compliant invoicing and QR-code-based participant approval.</li>
                <li>Connects providers with plan managers through the Planability ecosystem.</li>
                <li>Helps reduce administrative work, invoice errors, and payment delays.</li>
              </ul>
            </div>

            <p className="mt-2 text-sm">Here are some screen shots of Posability:</p>

            <div className="mt-4 flex flex-col md:flex-row gap-4">
              {[posabilityDashboard, posabilityInvoiceCreate].map((src, i) => (
                <img
                  key={i}
                  className="w-full md:flex-1 md:min-w-0 h-48 sm:h-56 md:h-64 object-cover rounded-lg cursor-zoom-in"
                  src={src}
                  alt={`posability_screenshot_${i + 1}`}
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {
        selectedImage &&
        <ImageModal
          src={selectedImage}
          alt="Planability screenshot"
          onClose={() => setSelectedImage(null)}
        />
      }
    </div>
  );
};

export default Projects;
