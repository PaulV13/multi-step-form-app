import { usePersonalInfo } from "../../stores/storePersonalInfo";

function PersonalInfo() {
  const updateName = usePersonalInfo((state) => state.updateName);
  const updateEmail = usePersonalInfo((state) => state.updateEmail);
  const updatePhone = usePersonalInfo((state) => state.updatePhone);

  const name = usePersonalInfo((state) => state.name);
  const email = usePersonalInfo((state) => state.email);
  const phone = usePersonalInfo((state) => state.phone);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="my-1 text-3xl font-bold">Personal info</h2>
      <p className="my-1 text-sm text-gray-400">
        Please provide your name, email address, and phone number.
      </p>

      <form className="flex flex-col">
        <label className="mb-2 text-sm font-semibold" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => updateName(e.currentTarget.value)}
          className="pointer mb-4 rounded-md border border-gray-200 p-2 text-sm font-semibold"
          type="text"
          id="name"
          name="name"
          value={name}
          autoComplete="given-name"
        />

        <label className="mb-2 text-sm font-semibold" htmlFor="email">
          Email Address
        </label>
        <input
          onChange={(e) => updateEmail(e.currentTarget.value)}
          className="pointer mb-4 rounded-md border border-gray-200 p-2 text-sm font-semibold"
          type="email"
          id="email"
          name="email"
          value={email}
          autoComplete="email"
        />

        <label className="mb-2 text-sm font-semibold" htmlFor="phone">
          Phone Number
        </label>
        <input
          onChange={(e) => updatePhone(e.currentTarget.value)}
          className="pointer mb-4 rounded-md border border-gray-200 p-2 text-sm font-semibold"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="e.g. +1 234 567 890"
          autoComplete="tel"
        />
      </form>
    </section>
  );
}

export default PersonalInfo;
