import { usePersonalInfo } from "../../stores/storePersonalInfo";

function PersonalInfo() {
  const updateName = usePersonalInfo((state) => state.updateName);
  const updateEmail = usePersonalInfo((state) => state.updateEmail);
  const updatePhone = usePersonalInfo((state) => state.updatePhone);

  const name = usePersonalInfo((state) => state.name);
  const email = usePersonalInfo((state) => state.email);
  const phone = usePersonalInfo((state) => state.phone);

  return (
    <>
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
          value={name}
          autoComplete="given-name"
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
          value={email}
          autoComplete="email"
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
          value={phone}
          placeholder="e.g. +1 234 567 890"
          autoComplete="tel"
        />
      </form>
    </>
  );
}

export default PersonalInfo;
