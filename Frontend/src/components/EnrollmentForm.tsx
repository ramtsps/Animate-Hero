import { ArrowLeft, Sparkles, Heart, Palette, Mail, Phone, CheckCircle2, Star, X } from "lucide-react";
import { useState } from "react";
import Footer from "../imports/Footer";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import { ContainerSid } from "../imports/HeroSectionSid171";
import { submitEnrollment } from "../services/enrollmentService";
import { useNavigate } from "react-router-dom";

export default function EnrollmentForm() {
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    age: "",
    gender: "",
    grade: "",
    parentName: "",
    email: "",
    address: "",
    phoneNumber: "",
    hometown: "",
    interestedInArt: "",
    previousArtClass: "",
    photoPermission: "",
    language: "",
    zelleTransactionId: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
      "email",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = true;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
      // You might want a specific error message logic, but for now we just mark it red
      // or we can just rely on the existing boolean error state logic which highlights the border
      // To alert specific message we would need valid state object or alert
      alert("Please enter a valid email address");
      return;
    }

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
        setFormData(initialFormData);

        alert("Enrollment submitted successfully! We'll be in touch soon.");
        navigate("/");
      } catch (error) {
        console.error("Submission error:", error);
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
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F2] to-white py-8 relative">


      <div className="max-w-7xl mx-auto px-6" style={{ width: "85%", marginBottom: "50px" }}>
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
        <button
          onClick={() => navigate("/course-details")}
          className="flex items-center gap-2 text-[#4a5565] hover:text-[#FF8559] transition-colors mb-8 cursor-pointer" style={{ width: "100%", marginTop: "150px" }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Course Details</span>
        </button>

        <div className="mb-8">
          <h1 className="text-[#101828] mb-2 font-['Montserrat:Bold',sans-serif]">Enrollment Form</h1>
          <p className="text-[#4a5565] font-['Montserrat:Regular',sans-serif]">
            Please fill in all the information below. Fields marked with{" "}
            <span className="text-[#FF8559]">*</span> are required.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-start', position: 'relative', }}>
          {/* LEFT SIDE - Scrollable Form */}
          <div style={{ width: '60%' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0f0f0]">
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

                <FormField
                  label="Parent or Guardian's Name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  error={errors.parentName}
                />

                {/* Email ID */}
                <FormField
                  label="Email ID"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
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

          {/* RIGHT SIDE - Sticky Info Block */}
          <div style={{ width: '40%' }}>
            <div className="sticky top-6">
              <div className="bg-gradient-to-br from-[#FFF5F2] via-white to-[#FFFEF0] rounded-3xl p-8 shadow-lg border-2 border-[#FF8559]/20 overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D1E231]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF8559]/10 rounded-full blur-3xl"></div>

                {/* Header with Icon */}
                <div className="relative mb-6 text-center pb-6 border-b-2 border-[#FF8559]/20">
                  <img
                    alt="Primiya Arts Online Logo"
                    src={imgTigerCalligraphy11Sid177}
                    className="h-16 w-auto mx-auto mb-4 object-contain"
                  />
                  <h2 className="text-[#101828] font-['Kaushan_Script:Regular',sans-serif] text-3xl">Primiya Arts Online</h2>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-[#D1E231] fill-[#D1E231]" />
                    <Star className="w-4 h-4 text-[#D1E231] fill-[#D1E231]" />
                    <Star className="w-4 h-4 text-[#D1E231] fill-[#D1E231]" />
                    <Star className="w-4 h-4 text-[#D1E231] fill-[#D1E231]" />
                    <Star className="w-4 h-4 text-[#D1E231] fill-[#D1E231]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-5 text-[#4a5565] leading-relaxed font-['Montserrat:Regular',sans-serif]">
                  {/* Welcome Message */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#FF8559]/10 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FF8559] to-[#ff7043] rounded-xl flex items-center justify-center shadow-md">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-base font-['Montserrat:Regular',sans-serif]">
                          Hi all this is Primiya. I have been doing art classes for kids for 4 years now. I'm so excited to have the opportunity to be a part of your ward's creative experience and artistic growth. I expect that all kids do their best in art class in their own way.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Qualities for Success */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#D1E231]/20 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#D1E231] to-[#c5d42d] rounded-xl flex items-center justify-center shadow-md">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-base font-['Montserrat:Regular',sans-serif] mb-3">
                          Qualities for success in art class are: a good attitude, good listening skills, teamwork skills, creative problem-solving skills and a sense of exploration and curiosity. Art provides the opportunity for students to experience a different atmosphere from the standard classroom setting.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What Art Can Be */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#FF8559]/10 shadow-sm">
                    <p className="text-[#101828] mb-3 font-semibold">Art can be:</p>
                    <div className="grid grid-cols-2 gap-2 text-base">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Fun</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Relaxing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Hands-on</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Messy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Exciting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Challenging</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8559]" />
                        <span>Sometimes out of the ordinary experiences</span>
                      </div>
                    </div>
                  </div>

                  {/* What We Offer */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#D1E231]/20 shadow-sm">
                    <p className="text-base font-['Montserrat:Regular',sans-serif]">
                      Throughout the course I plan on exposing kids to a wide range of different art techniques, art styles and art mediums.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#FF8559]/10 shadow-sm">
                    <p className="text-base font-['Montserrat:Regular',sans-serif] mb-4">
                      If you have any concerns or questions throughout the year, please reach out to:
                    </p>
                    <div className="space-y-2 text-base">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FF8559] to-[#ff7043] rounded-lg flex items-center justify-center shadow-sm">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <a href="mailto:primiyaarts@gmail.com" className="text-[#FF8559] hover:underline">
                          primiyaarts@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Payment CTA */}
                  <div className="bg-gradient-to-r from-[#FF8559] to-[#ff7043] rounded-2xl p-6 text-white text-center shadow-lg">
                    <Sparkles className="w-6 h-6 mx-auto mb-3" />
                    <p className="font-['Montserrat:Regular',sans-serif] text-lg mb-2">Ready to Sign Up?</p>
                    <p className="text-base opacity-90 mb-3 font-['Montserrat:Regular',sans-serif]">
                      Please fill out the form and Zelle to my number
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        <p className="text-xl font-bold">
                          617-639-6666
                        </p>
                      </div>
                    </div>
                  </div>
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