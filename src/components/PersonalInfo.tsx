import { usePersonalInfo } from "../store";

function PersonalInfo() {
  const updateName = usePersonalInfo((state) => state.updateName);
  const updateEmail = usePersonalInfo((state) => state.updateEmail);
  const updatePhone = usePersonalInfo((state) => state.updatePhone);

  return (
    <div className="w-full px-12 py-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold my-1">Personal info</h2>
        <p className="text-gray-400 text-sm my-1">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="flex flex-col">
        <label className="font-semibold text-sm mb-2" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => updateName(e.currentTarget.value)}
          className="pointer border border-gray-200 rounded-md p-2 mb-4 font-semibold text-sm"
          type="text"
          id="name"
          name="name"
        />

        <label className="font-semibold text-sm mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          onChange={(e) => updateEmail(e.currentTarget.value)}
          className="pointer border border-gray-200 rounded-md p-2 mb-4 font-semibold text-sm"
          type="email"
          id="email"
          name="email"
        />

        <label className="font-semibold text-sm mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          onChange={(e) => updatePhone(e.currentTarget.value)}
          className="pointer border border-gray-200 rounded-md p-2 mb-4 font-semibold text-sm"
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
    </div>
  );
}

export default PersonalInfo;
