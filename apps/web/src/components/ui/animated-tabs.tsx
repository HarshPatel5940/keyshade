'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { cn } from '@/utils/cn'

interface AnimatedTabProps {
  tabs: { id: string; label: string; tag?: string; special?: boolean }[]
}

function AnimatedTab({ tabs }: AnimatedTabProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="flex space-x-1 rounded-full border-[1px] border-white border-opacity-[.06] bg-white bg-opacity-[.08] p-1">
      {tabs.map((tab) => (
        <button
          className={cn(
            activeTab === tab.id ? '' : 'hover:text-white',
            `font-mediumtransition relative rounded-full px-3 py-1.5 text-sm focus-visible:outline-2 ${tab.special ? 'text-brandBlue/80 hover:text-brandBlue/90' : ' text-white/80 hover:text-white/90'}`
          )}
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id)
          }}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
          type="button"
        >
          {activeTab === tab.id && (
            <motion.span
              className="absolute inset-0 z-10 border-[1px] border-[#A9A3C2] border-opacity-[.05] bg-white bg-opacity-[.08]"
              layoutId="bubble"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}{' '}
          {tab.tag ? (
            <span className="from-brandBlue/80 ml-1 h-6 w-14 rounded-full border-[1px] border-white border-opacity-[0.04] bg-white bg-opacity-[.06] bg-gradient-to-t to-[#8EE8FF]/80 bg-clip-text p-1 text-xs tracking-wide text-transparent">
              {tab.tag}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  )
}

export default AnimatedTab
