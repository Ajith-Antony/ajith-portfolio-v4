import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  size: number;
}

export default function CyberQuantumCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = { x: width / 2, y: height / 2, radius: 220 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create 3D Nodes
    const nodeCount = Math.min(70, Math.floor(width / 20));
    const nodes: Node3D[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * width * 1.5;
      const y = (Math.random() - 0.5) * height * 1.5;
      const z = Math.random() * 400 + 100;
      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1.5,
      });
    }

    let angleX = 0;
    let angleY = 0;
    const isLight = theme === 'light';

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += 0.003;
      angleY += 0.002;

      // Draw subtle background animated wave
      ctx.beginPath();
      const waveY = height * 0.5 + Math.sin(Date.now() * 0.001) * 30;
      ctx.moveTo(0, waveY);
      for (let x = 0; x <= width; x += 40) {
        const y = waveY + Math.sin(x * 0.005 + Date.now() * 0.002) * 20;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = isLight ? 'rgba(224, 61, 0, 0.06)' : 'rgba(255, 69, 0, 0.12)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Project & Render 3D Nodes
      const projectedNodes: { px: number; py: number; scale: number; node: Node3D }[] = [];

      nodes.forEach((node) => {
        // Drift position
        node.baseX += node.vx;
        node.baseY += node.vy;

        if (Math.abs(node.baseX) > width) node.vx *= -1;
        if (Math.abs(node.baseY) > height) node.vy *= -1;

        // Rotate around center in 3D
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        let rx = node.baseX * cosY - node.baseZ * sinY;
        let rz = node.baseX * sinY + node.baseZ * cosY;
        let ry = node.baseY * cosX - rz * sinX;

        // Perspective Projection
        const fov = 400;
        const scale = fov / (fov + rz + 300);
        const px = width / 2 + rx * scale;
        const py = height / 2 + ry * scale;

        // Mouse displacement
        const dx = mouse.x - px;
        const dy = mouse.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let finalPx = px;
        let finalPy = py;
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          finalPx -= (dx / dist) * force * 40;
          finalPy -= (dy / dist) * force * 40;
        }

        projectedNodes.push({ px: finalPx, py: finalPy, scale, node });
      });

      // Connect near nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * (isLight ? 0.15 : 0.25);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = i % 2 === 0
              ? `rgba(255, 69, 0, ${alpha})`
              : `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = Math.min(p1.scale, p2.scale) * 1.5;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      projectedNodes.forEach((p) => {
        const radius = Math.max(1, p.node.size * p.scale);
        ctx.beginPath();
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#e03d00' : '#ff4500';
        ctx.fill();

        // Glow halo around close nodes
        if (p.scale > 0.8) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? 'rgba(224, 61, 0, 0.08)' : 'rgba(255, 69, 0, 0.15)';
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
}
