import { z } from "zod";

export const TIME_SLOTS = ["Morning", "Afternoon", "Evening"] as const;

export const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid UK contact number.")
    .max(20, "Phone number is too long."),
  clinicId: z
    .string()
    .trim()
    .min(1, "Please select a preferred UK clinic."),
  treatmentSlug: z
    .string()
    .trim()
    .min(1, "Please select a treatment."),
  preferredDate: z
    .string()
    .trim()
    .min(1, "Please choose a preferred date."),
  preferredTimeSlot: z.enum(TIME_SLOTS, {
    message: "Please select a preferred time window.",
  }),
  notes: z
    .string()
    .trim()
    .max(500, "Notes must be under 500 characters.")
    .optional(),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please confirm consent so we can arrange your appointment.",
    }),
  website: z.string().max(0).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long.")
    .optional(),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a brief subject.")
    .max(120, "Subject must be under 120 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Please share at least 10 characters in your message.")
    .max(1500, "Message must be under 1500 characters."),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please confirm consent so we can reply to your enquiry.",
    }),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
