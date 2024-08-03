import { CloudOutlined, Handshake, HandshakeOutlined, Hardware, HardwareOutlined, Outbound, OutboundOutlined, PrecisionManufacturing, SupportAgent, SupportOutlined } from '@mui/icons-material'
import React from 'react'

function CoreServices() {
  return (
    <div className="core__services">
        <ul>
            <li>
                <span className='icon'>
                    <HandshakeOutlined className='mui_icon' style={{fontSize:'40px'}}/>
                </span>
                Operation</li>
            <li>
                <span className='icon'>
                    <CloudOutlined className='mui_icon' style={{fontSize:'40px'}}/>
                </span>
                Cloud</li>
            <li>
                <span className='icon'>
                    <SupportAgent className='mui_icon' style={{fontSize:'40px'}}/>
                </span>
                Consultancy</li>
            <li>
                <span className='icon'>
                    <HardwareOutlined className='mui_icon' style={{fontSize:'40px'}}/>
                </span>
                Hardware</li>
            <li>
                <span className='icon'>
                    <OutboundOutlined className='mui_icon' style={{fontSize:'40px'}}/>
                </span>
                Outsourcing</li>
        </ul>
    </div>
  )
}

export default CoreServices