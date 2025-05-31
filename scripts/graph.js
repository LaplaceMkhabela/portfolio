const canvas = document.getElementById('graphCanvas');
        const ctx = canvas.getContext('2d');
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        const scale = 150;
        
        let theta = 0;
        let points = [];
        let hue = 0;
        let colorSpeed = 0.5;
        let trailLength = 1500;
        
        function polarFunction(theta) {
            return Math.pow(Math.sin(2.4 * theta), 2) + Math.pow(Math.cos(2.4 * theta), 4);
        }
        
        function polarToCartesian(r, theta) {
            return {
                x: centerX + r * scale * Math.cos(theta),
                y: centerY - r * scale * Math.sin(theta)
            };
        }
        
        function drawAxes() {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            
            // X axis
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            ctx.lineTo(canvas.width, centerY);
            ctx.stroke();
            
            // Y axis
            ctx.beginPath();
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, canvas.height);
            ctx.stroke();
            
            // Circles for scale
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            for (let i = 1; i <= 2; i++) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, i * scale, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }
        
        function drawGraph() {
            // Calculate next point
            theta += 0.02;
            const r = polarFunction(theta);
            const point = polarToCartesian(r, theta);
            points.push(point);
            
            // Manage trail length
            if (points.length > trailLength) {
                points.shift();
            }
            
            // Clear canvas with semi-transparent background for trail effect
            ctx.fillStyle = '#1a202c';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw axes
            drawAxes();
            
            // Update color
            hue = (hue + colorSpeed) % 360;
            const currentColor = `hsl(${hue}, 100%, 60%)`;
            
            // Draw the curve with gradient
            if (points.length > 1) {
                for (let i = 1; i < points.length; i++) {
                    const progress = i / points.length;
                    const segmentHue = (hue + progress * 60) % 360;
                    ctx.strokeStyle = `hsl(${segmentHue}, 100%, ${60 + 20 * Math.sin(progress * Math.PI * 2)}%)`;
                    ctx.lineWidth = 2 + 2 * Math.sin(progress * Math.PI * 2);
                    
                    ctx.beginPath();
                    ctx.moveTo(points[i-1].x, points[i-1].y);
                    ctx.lineTo(points[i].x, points[i].y);
                    ctx.stroke();
                }
            }
            
            // Draw current position marker
            if (points.length > 0) {
                const current = points[points.length - 1];
                ctx.fillStyle = currentColor;
                ctx.beginPath();
                ctx.arc(current.x, current.y, 6, 0, 2 * Math.PI);
                ctx.fill();
                
                // Add glow effect
                ctx.shadowColor = currentColor;
                ctx.shadowBlur = 15;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
            
            requestAnimationFrame(drawGraph);
        }
        
        // Start the animation
        drawGraph();
        
        // Make responsive
        window.addEventListener('resize', function() {
            canvas.width = Math.min(300, window.innerWidth - 40);
            canvas.height = Math.min(300, window.innerHeight - 40);
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
        });