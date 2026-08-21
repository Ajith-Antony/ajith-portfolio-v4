import React, { useEffect, useRef } from 'react';

interface TechNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  radius: number;
  color: string;
}

export default function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const techLabels = [
      { label: 'React', color: '#38bdf8' },
      { label: 'Next.js', color: '#f8fafc' },
      { label: 'TypeScript', color: '#60a5fa' },
      { label: 'WebSockets', color: '#34d399' },
      { label: 'Redux Toolkit', color: '#a78bfa' },
      { label: 'Lightweight Charts', color: '#38bdf8' },
      { label: 'Shufti KYC', color: '#10b981' },
      { label: 'Ag-Grid', color: '#fbbf24' },
      { label: 'Web3 / DEX', color: '#c084fc' },
      { label: 'Node.js', color: '#4ade80' },
      { label: 'Core Web Vitals', color: '#f43f5e' },
      { label: 'Tailwind CSS', color: '#38bdf8' },
    ];

    const nodes: TechNode[] = techLabels.map((item) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      label: item.label,
      radius: 3 + Math.random() * 2,
      color: item.color,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      // Render nodes & connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Mouse interaction force
        const dxMouse = mouseX - node.x;
        const dyMouse = mouseY - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.35 * (1 - distMouse / 180)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Draw connections between nodes
        const isDarkTheme = document.documentElement.classList.contains('dark');
        const strokeColor = isDarkTheme ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.15)';
        const labelColor = isDarkTheme ? 'rgba(203, 213, 225, 0.6)' : 'rgba(15, 23, 42, 0.7)';

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw node text label
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = labelColor;
        ctx.fillText(node.label, node.x + 8, node.y + 3);

      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
