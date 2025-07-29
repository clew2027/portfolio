import React from 'react';

const ArchitectureDiagram = () => {
  return (
    <div style={{ fontFamily: 'monospace', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1rem' }}>
        <div>Frontend</div>
        <div>Backend</div>
        <div>Storage</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ textAlign: 'center' }}>
          <div>SwiftUI</div>
          <div>Agora SDK</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div>Node.js - express.js</div>
          <div>WebSocket + Whisper</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div>MongoDB</div>
        </div>
      </div>

      {/* Arrows */}
      <svg width="100%" height="80">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7"
            refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
        {/* Frontend to Backend */}
        <line x1="20%" y1="10" x2="50%" y2="10" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
        {/* Backend to Storage */}
        <line x1="50%" y1="60" x2="80%" y2="60" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </svg>
    </div>
  );
};

export default ArchitectureDiagram;
