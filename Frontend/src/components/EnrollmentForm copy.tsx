import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../imports/Footer";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import { ContainerSid } from "../imports/HeroSectionSid171";
import { submitEnrollment } from "../services/enrollmentService";
export default function EnrollmentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    grade: "",
    parentName: "",
    address: "",
    phoneNumber: "",
    hometown: "",
    interestedInArt: "",
    previousArtClass: "",
    photoPermission: "",
    language: "",
    zelleTransactionId: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: Record<string, boolean> = {};
    const requiredFields = [
      "name",
      "age",
      "gender",
      "grade",
      "parentName",
      "address",
      "phoneNumber",
      "hometown",
      "interestedInArt",
      "previousArtClass",
      "photoPermission",
      "language",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const submissionData = {
          ...formData,
          submissionDate: new Date().toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
        await submitEnrollment(submissionData);
        alert("Enrollment submitted successfully! We'll be in touch soon.");
        navigate("/");
      } catch (error) {
        alert("Failed to submit enrollment. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all required fields marked with *");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF5F2] to-white">
      <div
        className="absolute h-[74px] left-[54px] top-[44px] w-[341px] cursor-pointer"
        data-name="tiger-calligraphy11_sid_1:77"
        onClick={() => navigate("/")}
      >
        <img
          alt="Primiya's Art"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgTigerCalligraphy11Sid177}
        />
      </div>
      <div className="z-20">
        <ContainerSid />
      </div>
      <div className="flex-grow py-8" style={{ width: "100%", marginTop: "150px" }}>
        <div className=" mx-auto px-6" style={{ width: "80%" }}>
          {/* Header */}
          <button
            onClick={() => navigate("/course-details")}
            className="flex items-center gap-2 cursor-pointer text-[#4a5565] hover:text-[#FF8559] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Course Details</span>
          </button>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-start', position: 'relative' }}>
            {/* Left Side - Scrollable Form */}
            <div style={{ width: '66%' }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#101828] mb-2 font-['Montserrat:Bold',sans-serif]">Enrollment Form</h2>
                <p className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">
                  Fields marked with <span className="text-[#FF8559]">*</span> are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f0f0f0]">
                <div className="space-y-6">
                  {/* Name */}
                  <FormField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                  />

                  {/* Age */}
                  <div>
                    <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
                      Age <span className="text-[#FF8559]">*</span>
                    </label>
                    <select
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.age ? "border-[#FF8559]" : "border-[#e0e0e0]"
                        } focus:outline-none focus:border-[#FF8559] transition-colors font-['Montserrat:Regular',sans-serif]`}
                    >
                      <option value="">Select age</option>
                      {[5, 6, 7, 8, 9, 10, 11].map((age) => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
                      Gender <span className="text-[#FF8559]">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.gender ? "border-[#FF8559]" : "border-[#e0e0e0]"
                        } focus:outline-none focus:border-[#FF8559] transition-colors font-['Montserrat:Regular',sans-serif]`}
                    >
                      <option value="">Select gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  {/* Grade */}
                  <FormField
                    label="Grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    error={errors.grade}
                  />

                  {/* Parent/Guardian Name */}
                  <FormField
                    label="Parent or Guardian's Name"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    error={errors.parentName}
                  />

                  {/* Address */}
                  <div>
                    <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
                      Address <span className="text-[#FF8559]">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.address ? "border-[#FF8559]" : "border-[#e0e0e0]"
                        } focus:outline-none focus:border-[#FF8559] transition-colors resize-none font-['Montserrat:Regular',sans-serif]`}
                    />
                  </div>

                  {/* Phone Number */}
                  <FormField
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    error={errors.phoneNumber}
                  />

                  {/* Hometown */}
                  <FormField
                    label="Which is your hometown in India?"
                    name="hometown"
                    value={formData.hometown}
                    onChange={handleChange}
                    required
                    error={errors.hometown}
                  />

                  {/* Is your kid interested in art? */}
                  <div>
                    <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
                      Is your kid interested in art? <span className="text-[#FF8559]">*</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="interestedInArt"
                          value="Yes"
                          checked={formData.interestedInArt === "Yes"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FF8559]"
                        />
                        <span className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="interestedInArt"
                          value="No"
                          checked={formData.interestedInArt === "No"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FF8559]"
                        />
                        <span className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Has your kid attended an art class previously? */}
                  <div>
                    <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
                      Your kid attended any art class previously?{" "}
                      <span className="text-[#FF8559]">*</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="previousArtClass"
                          value="Yes"
                          checked={formData.previousArtClass === "Yes"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FF8559]"
                        />
                        <span className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="previousArtClass"
                          value="No"
                          checked={formData.previousArtClass === "No"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FF8559]"
                        />
                        <span className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Permission for photos/videos */}
                  <div>
                    <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
                      Permission to photograph or video your kid with the artwork that can be used on my Facebook page?{" "}
                      <span className="text-[#FF8559]">*</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="photoPermission"
                          value="Yes"
                          checked={formData.photoPermission === "Yes"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FF8559]"
                        />
                        <span className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="photoPermission"
                          value="No"
                          checked={formData.photoPermission === "No"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FF8559]"
                        />
                        <span className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Language spoken at home */}
                  <FormField
                    label="What is the language the kid usually speaks at home?"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    required
                    error={errors.language}
                  />

                  {/* Zelle Transaction ID (optional) */}
                  <FormField
                    label="Zelle Transaction ID"
                    name="zelleTransactionId"
                    value={formData.zelleTransactionId}
                    onChange={handleChange}
                    required={false}
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#FF8559] cursor-pointer text-white px-12 py-4 rounded-full transition-all hover:shadow-lg transform hover:scale-105 font-['Montserrat:SemiBold',sans-serif] ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#ff7043]"
                      }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                  </button>
                </div>
              </form>
            </div>
            {/* Right Side - Sticky Info */}
            <div style={{ width: '33%', position: 'sticky', top: '2rem' }}>
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f0f0f0] text-[#4a5565] leading-relaxed transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <h1 className="font-['Kaushan_Script:Regular',sans-serif] text-4xl text-[#101828] mb-6 text-center pb-4 border-b border-[#f0f0f0]">
                  Primiya Arts Online
                </h1>

                <div className="space-y-4 font-['Montserrat:Regular',sans-serif]">
                  <p>
                    Hi all this is Primiya. I have been doing art classes for kids for 4 years now. Im so excited to have the opportunity to be a part of your ward's creative experience and artistic growth. I expect that all kids do their best in art class in their own way.
                  </p>

                  <p>
                    Qualities for success in art class are: a good attitude, good listening skills, teamwork skills, creative problem-solving skills and a sense of exploration and curiosity. Art provides the opportunity for students to experience a different atmosphere from the standard classroom setting.
                  </p>

                  <div>
                    <p className="font-semibold text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">Art can be:</p>
                    <ul className="mb-4 space-y-2">
                      {['Fun', 'Relaxing', 'Hands-on', 'Messy', 'Exciting', 'Challenging', 'Sometimes out of the ordinary experiences'].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8559]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Throughout the course I plan on exposing kids to a wide range of different art techniques, art styles and art mediums.
                  </p>

                  <div className="bg-[#FFF5F0] p-4 rounded-xl border border-[#FF8559]/30 text-center mt-6">
                    <p className="font-semibold text-[#101828] font-['Montserrat:Medium',sans-serif]">
                      Please fill out the form and Zelle to my number <span className="text-[#FF8559] text-lg">6176396666</span> to sign up!
                    </p>
                  </div>

                  <p className="text-sm text-center mt-4">
                    Any questions? <a href="mailto:primiyaarts@gmail.com" className="text-[#FF8559] hover:underline font-semibold">primiyaarts@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error = false,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-[#101828] mb-2 font-['Montserrat:Medium',sans-serif]">
        {label} {required && <span className="text-[#FF8559]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border ${error ? "border-[#FF8559]" : "border-[#e0e0e0]"
          } focus:outline-none focus:border-[#FF8559] transition-colors font-['Montserrat:Regular',sans-serif]`}
      />
    </div>
  );
}
