import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,syncUserDeletion,syncUserUpdation,
  ],
});git remote add origin https://github.com/YOUR_USERNAME/QuickCart-Updated.git