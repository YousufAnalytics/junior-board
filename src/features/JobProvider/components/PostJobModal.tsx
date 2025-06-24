import React from "react";
import Input from "../../../components/ui/Input";
import Textarea from "../../../components/ui/Textarea";
import Select from "../../../components/ui/Select";

type JobType = "Full Time" | "Part Time";

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: JobFormData) => void;
}

export interface JobFormData {
  title: string;
  description: string;
  skills: string;
  qualification: string;
  type: JobType;
  location: string;
  ctc: string;
  openings: number;
  deadline: string;
}

const PostJobModal: React.FC<PostJobModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<JobFormData>({
    title: "",
    description: "",
    skills: "",
    qualification: "",
    type: "Full Time",
    location: "",
    ctc: "",
    openings: 1,
    deadline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "openings" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Post a New Job
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              change={handleChange}
              placeholder="Job Title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              change={handleChange}
              placeholder="Job Location"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <Textarea
              name="description"
              value={formData.description}
              change={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills Required
            </label>
            <Input
              type="text"
              name="skills"
              value={formData.skills}
              change={handleChange}
              placeholder="Skills Required"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Qualification
            </label>
            <Input
              type="text"
              name="qualification"
              value={formData.qualification}
              change={handleChange}
              placeholder="Educational Qualification"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <Select
              value={formData.type}
              onChange={handleChange}
              placeholder="Select Job Type"
              options={[
                { label: "Full Time", value: "full" },
                { label: "Part Time", value: "part" },
                { label: "Internship", value: "intern" },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CTC
            </label>
            <Input
              type="text"
              name="ctc"
              value={formData.ctc}
              change={handleChange}
              placeholder="CTC"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              No. of Openings
            </label>
            <Input
              type="text"
              name="openings"
              value={formData.openings}
              change={handleChange}
              placeholder="Openings"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apply Before
            </label>
            <Input
              type="date"
              name="deadline"
              value={formData.openings}
              change={handleChange}
            />
          </div>

          <div className="md:col-span-2 flex justify-end mt-4 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobModal;
