import React from "react";
import { motion } from "framer-motion";
import { Button } from "components/ui/Button";
import { Card } from "components/ui/Card";
import { CardContent } from "components/ui/CardContent";
import logo from "assets/images/logo.png";

export default function HomeView() {
  return (
    <div className="min-h-full bg-[#111] text-[#cceeff] p-4 font-sans">
      <header className="text-center border-b border-[#333] pb-10 mb-10">
        <motion.img
          src={logo}
          alt="Echoes of Value Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto w-48 h-auto mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold tracking-tight text-[#33ccff]"
        >
          Echoes of Value
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-base max-w-2xl mx-auto text-[#99ccff]"
        >
          What’s real is what sells. Survive as a Recolector in a world where
          perception is power and artifacts tell stories — true or not.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6"
        >
          <Button className="text-md px-5 py-2 bg-[#1c3f5e] hover:bg-[#1a3550] rounded shadow-md">
            Enter the Market
          </Button>
        </motion.div>
      </header>

      <section className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <Card className="bg-[#1a1a1a] border border-[#2e3b4e]">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold text-[#66ccff]">
              Choose Your Path
            </h2>
            <p className="mt-2 text-sm text-[#b3d9ff]">
              Will you restore truth, spin tales, or master deception? Forge
              your role: Restaurador, Narrador, or Falsificador.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border border-[#2e3b4e]">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold text-[#66ccff]">
              Explore and Loot
            </h2>
            <p className="mt-2 text-sm text-[#b3d9ff]">
              Scavenge ruined zones for valuable objects. Rarities range from
              Common to Mítico. Some items are real, others... not so much.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border border-[#2e3b4e]">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold text-[#66ccff]">
              The Mercado Vivo
            </h2>
            <p className="mt-2 text-sm text-[#b3d9ff]">
              Earn your way to the clandestine live market, where real players
              buy, sell, and bluff their way to dominance.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
