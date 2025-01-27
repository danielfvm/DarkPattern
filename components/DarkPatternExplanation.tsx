"use client"

import {Menu} from "lucide-react";
import {useState, useRef, useEffect} from "react"
import {useLayer, Arrow} from "react-laag";
import {motion, AnimatePresence} from "framer-motion";

interface DarkPatternExplanationProps {
  patternName: string
  explanation: string
  children: React.ReactNode
}

export function DarkPatternExplanation({patternName, explanation, children}: DarkPatternExplanationProps) {
  const [isOpen, setOpen] = useState(false);

  const {renderLayer, triggerProps, layerProps, arrowProps} =
    useLayer({
      isOpen,
      overflowContainer: false,
      auto: true,
      triggerOffset: 10,
      arrowOffset: 4,
      onOutsideClick: () => setOpen(false)
    });

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div {...triggerProps}>
        {children}
      </div>
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.ul {...layerProps}>
              <div
                className={`absolute z-50 p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-64 text-sm`}
              >
                <h3 className="font-bold text-lg mb-2">{patternName}</h3>
                <p>{explanation}</p>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

