"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactSchemaType } from "../../../schemas/contact.schema";
import { submitContactFormAction } from "../../../actions/contact.action";
import MagnetButton from "../../../components/ui/MagnetButton";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      telegram: "",
      projectType: "Next.js Web App",
      budget: "$1,000 - $3,000",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactSchemaType) => {
    setIsSubmitting(true);

    try {
      const result = await submitContactFormAction(data);

      if (result.success) {
        toast.success("Success!", {
          description: result.message,
        });

        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#DC2626", "#F59E0B", "#FFFFFF"],
        });

        reset();
      } else {
        toast.error("Submission Failed", {
          description: result.message,
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 rounded-3xl bg-[#111827]/90 border border-white/[0.08] backdrop-blur-xl space-y-5 shadow-2xl relative"
      noValidate
    >
      {/* Anti-Spam Honeypot Field */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="text-xs font-mono text-gray-300 block mb-1.5">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-3 rounded-xl bg-[#030712] border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${
              errors.name ? "border-red-500" : "border-white/[0.08] focus:border-red-500/60"
            }`}
          />
          {errors.name && (
            <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Telegram Username Field */}
        <div>
          <label htmlFor="telegram" className="text-xs font-mono text-gray-300 block mb-1.5">
            Telegram Username *
          </label>
          <input
            id="telegram"
            type="text"
            placeholder="@username"
            {...register("telegram")}
            aria-invalid={!!errors.telegram}
            className={`w-full px-4 py-3 rounded-xl bg-[#030712] border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${
              errors.telegram ? "border-red-500" : "border-white/[0.08] focus:border-red-500/60"
            }`}
          />
          {errors.telegram && (
            <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.telegram.message}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Project Type Dropdown */}
        <div>
          <label htmlFor="projectType" className="text-xs font-mono text-gray-300 block mb-1.5">
            Project Type *
          </label>
          <select
            id="projectType"
            {...register("projectType")}
            aria-invalid={!!errors.projectType}
            className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-red-500/60 transition-colors cursor-pointer"
          >
            <option value="Next.js Web App">Next.js Web App</option>
            <option value="React Native Mobile App">React Native Mobile App</option>
            <option value="SaaS Platform MVP">SaaS Platform MVP</option>
            <option value="Custom Dashboard / Admin">Custom Dashboard / Admin</option>
            <option value="FastAPI / Node.js Backend">FastAPI / Node.js Backend</option>
            <option value="Other Services">Other Services</option>
          </select>
          {errors.projectType && (
            <p className="text-[11px] font-mono text-red-400 mt-1">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Budget Dropdown */}
        <div>
          <label htmlFor="budget" className="text-xs font-mono text-gray-300 block mb-1.5">
            Estimated Budget *
          </label>
          <select
            id="budget"
            {...register("budget")}
            aria-invalid={!!errors.budget}
            className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-red-500/60 transition-colors cursor-pointer"
          >
            <option value="$500 - $1,000">$500 - $1,000 USD</option>
            <option value="$1,000 - $3,000">$1,000 - $3,000 USD</option>
            <option value="$3,000 - $5,000">$3,000 - $5,000 USD</option>
            <option value="$5,000+ (Enterprise)">$5,000+ USD (Enterprise)</option>
            <option value="Flexible / To be discussed">Flexible / To be discussed</option>
          </select>
          {errors.budget && (
            <p className="text-[11px] font-mono text-red-400 mt-1">
              {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="text-xs font-mono text-gray-300 block mb-1.5">
          Project Overview & Details *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your product goals, requirements, and target timeline..."
          {...register("message")}
          aria-invalid={!!errors.message}
          className={`w-full px-4 py-3 rounded-xl bg-[#030712] border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
            errors.message ? "border-red-500" : "border-white/[0.08] focus:border-red-500/60"
          }`}
        />
        {errors.message && (
          <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <MagnetButton
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-glow-red hover:shadow-glow-red-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
            <span>Transmitting to Telegram...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-amber-400" />
            <span>Send Message via Telegram Bot</span>
          </>
        )}
      </MagnetButton>
    </form>
  );
}
