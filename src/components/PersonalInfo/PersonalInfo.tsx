import { useForm } from "react-hook-form";
import {
  StatePersonalInfo,
  usePersonalInfo,
} from "../../stores/storePersonalInfo";
import { useSidebar } from "../../stores/storeSidebar";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const InfoSchema: ZodType<StatePersonalInfo> = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name is must be 3 characters long"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  phone: z
    .string()
    .regex(/^\+?[0-9]+$/, "Phone number is invalid")
    .min(1, "Phone number is required")
    .min(8, "Phone number is must be at least 8 characters long")
    .max(15, "Phone number is must have a maximum of 15 characters"),
});

function PersonalInfo() {
  const updateName = usePersonalInfo((state) => state.updateName);
  const updateEmail = usePersonalInfo((state) => state.updateEmail);
  const updatePhone = usePersonalInfo((state) => state.updatePhone);

  const nextStep = useSidebar((state) => state.handleNextStep);

  const name = usePersonalInfo((state) => state.name);
  const email = usePersonalInfo((state) => state.email);
  const phone = usePersonalInfo((state) => state.phone);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StatePersonalInfo>({
    defaultValues: { name, email, phone },
    resolver: zodResolver(InfoSchema),
  });

  const onSubmit = () => {
    nextStep();
  };

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Personal info</h2>
      <p className="text-sm text-gray-400">
        Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="text-xs font-semibold" htmlFor="name">
            Name
          </label>
          {errors.name?.message && (
            <span className="text-xs font-semibold text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>
        <input
          {...register("name")}
          onChange={(e) => updateName(e.currentTarget.value)}
          className="pointer mb-2 rounded-md border border-gray-200 p-2 text-sm font-semibold"
          type="text"
          id="name"
          name="name"
          value={name}
          autoComplete="given-name"
        />

        <div className="flex justify-between">
          <label className="text-xs font-semibold" htmlFor="email">
            Email Address
          </label>
          {errors.email?.message && (
            <span className="text-xs font-semibold text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        <input
          {...register("email")}
          onChange={(e) => updateEmail(e.currentTarget.value)}
          className="pointer mb-2 rounded-md border border-gray-200 p-2 text-sm font-semibold"
          type="email"
          id="email"
          name="email"
          value={email}
          autoComplete="email"
        />

        <div className="flex justify-between">
          <label className="text-xs font-semibold" htmlFor="phone">
            Phone Number
          </label>
          {errors.phone?.message && (
            <span className="text-xs font-semibold text-red-500">
              {errors.phone.message}
            </span>
          )}
        </div>
        <input
          {...register("phone")}
          onChange={(e) => updatePhone(e.currentTarget.value)}
          className="pointer mb-2 rounded-md border border-gray-200 p-2 text-sm font-semibold"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="e.g. +1 234 567 890"
          autoComplete="tel"
        />

        <input
          type="submit"
          className="absolute bottom-10 right-14 w-24 rounded-md bg-blue-950 px-4 py-2 text-sm text-gray-200 hover:bg-blue-800"
          value="Next Step"
        />
      </form>
    </section>
  );
}

export default PersonalInfo;
