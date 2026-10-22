// 📸 ใส่รูปภาพใน public/images และวิดีโอใน public/videos
// ตัวอย่างในแต่ละ Project: images: ['images/project-1.jpg', 'images/project-2.jpg', 'images/project-3.jpg']
// รูปจริงต้องอยู่ใน public/images/ และห้ามใส่คำว่า public ใน path
// เพิ่ม YouTube ที่ youtube: ['https://www.youtube.com/watch?v=...']
// Add photos to public/images and videos to public/videos.
// Example: images: ['images/cctv-1.jpg', 'images/cctv-2.jpg']
// Example: videos: ['videos/cctv-demo.mp4']
// Do not publish confidential employer/customer information.
export const experience = [
  {
    company: 'Pavara Prosperity', period: '2022 — 2025 (4 years)',
    role: { th: 'ฝ่ายขายและดูแลลูกค้าองค์กร', en: 'Sales & Client Engagement' },
    category: { th: 'การขายซอฟต์แวร์ B2B และความสัมพันธ์ลูกค้า', en: 'B2B Software Sales & Client Relations' },
    description: {
      th: 'นำเสนอ Software Solution และผลิตภัณฑ์แก่ลูกค้าองค์กร ทั้งโรงพยาบาล หน่วยงานราชการ และลูกค้าภาคธุรกิจ พร้อมดูแลการสื่อสารและความสัมพันธ์กับลูกค้า',
      en: 'Presented software solutions and products to institutional and business customers, supporting client communication and long-term engagement.'
    },
    bullets: {
      th: [
        'นำเสนอและขายซอฟต์แวร์ให้โรงพยาบาลศรีนครินทร์ คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น',
        'นำเสนอและขาย Software Solution ให้หน่วยงานเทศบาลในจังหวัดขอนแก่น',
        'จำหน่ายผลิตภัณฑ์น้ำยาทำความสะอาด พร้อมแนะนำคุณสมบัติและการใช้งานสินค้า',
        'รับฟังความต้องการ ประสานงาน และดูแลการสื่อสารกับลูกค้าตลอดกระบวนการขาย'
      ],
      en: [
        'Presented and sold software solutions to Srinagarind Hospital, Faculty of Medicine, Khon Kaen University',
        'Presented software solutions to municipal government offices in Khon Kaen',
        'Sold cleaning products with product demonstrations and customer guidance',
        'Gathered requirements and coordinated communications throughout the client sales process'
      ]
    },
    skills: ['B2B Sales', 'Software Solutions', 'Client Relations', 'Presentation', 'Customer Engagement']
  },
  {
    company: 'Boonrawd Brewery Co., Ltd.', period: 'Jul 2026 — 2026',
    role: { th: 'วิศวกรระบบดิจิทัล', en: 'Digital Systems Engineer' },
    category: { th: 'AI อุตสาหกรรมและระบบอัตโนมัติ', en: 'Industrial AI & Automation' },
    description: {
      th: 'พัฒนาระบบดิจิทัลเพื่อสนับสนุนงานควบคุมคุณภาพ การตรวจสอบสถานะอุปกรณ์ และการจัดการงานซ่อมในโรงงานอุตสาหกรรม',
      en: 'Developed digital engineering solutions for quality inspection, equipment monitoring and maintenance workflows in manufacturing.'
    },
    bullets: {
      th: [
        'พัฒนาระบบ AI Vision ตรวจสอบคุณภาพขวด กล่องบรรจุภัณฑ์ และผลิตภัณฑ์ในสายการผลิต',
        'ประสานงานและคัดเลือก Supplier สำหรับโครงการ Face Recognition เพื่อรองรับการเข้า–ออกของพนักงาน',
        'พัฒนาระบบ CCTV Monitoring ตรวจจับสถานะกล้อง Downtime และแจ้งเตือนผ่าน LINE',
        'สร้าง Real-time Dashboard สำหรับผู้ดูแลระบบ พร้อมกระบวนการสร้างและติดตามงานซ่อมกล้อง'
      ],
      en: [
        'Developed AI Vision inspection for bottles, cartons and other production-line products',
        'Coordinated supplier sourcing for an employee access Face Recognition initiative',
        'Built CCTV downtime monitoring and LINE alert notifications',
        'Developed real-time operational dashboards and CCTV repair-job workflows'
      ]
    },
    skills: ['Python', 'Computer Vision', 'OpenCV', 'Node-RED', 'MySQL', 'LINE API', 'Dashboard']
  },
  {
    company: 'KKF Thailand', period: 'Jan 2020 — Jul 2026',
    role: { th: 'นักพัฒนาซอฟต์แวร์ Full Stack', en: 'Full Stack Developer' },
    category: { th: 'ระบบ ERP และซอฟต์แวร์องค์กร', en: 'ERP & Enterprise Software' },
    description: {
      th: 'วิเคราะห์ ออกแบบ และพัฒนาเว็บแอปพลิเคชันสำหรับงานโรงงาน วางแผนการผลิต และการบริหารข้อมูลองค์กร',
      en: 'Analyzed and delivered web applications for manufacturing, production planning and enterprise operations.'
    },
    bullets: {
      th: [
        'รวบรวมและวิเคราะห์ความต้องการผู้ใช้ เพื่อออกแบบระบบและกระบวนการทำงานที่เหมาะสม',
        'ออกแบบและพัฒนาระบบ ERP รวมถึงงานจัดซื้อจัดจ้าง การวางแผนการผลิต และใบสั่งผลิต',
        'พัฒนา Dashboard สำหรับผู้บริหารด้วยข้อมูลผลผลิตและข้อมูลกระบวนการผลิต',
        'พัฒนา Web Application และระบบฐานข้อมูลด้วย C#, ASP.NET และ SQL',
        'พัฒนาระบบข้อมูลเครื่องจักรเพื่อดูประสิทธิภาพและตัวชี้วัดแบบ Real-time',
        'ประยุกต์ AI และ Computer Vision เพื่อตรวจสอบข้อบกพร่องของผลิตภัณฑ์',
        'จัดทำ Flowchart ออกแบบระบบ ทดสอบ และแก้ไขข้อผิดพลาดของแอปพลิเคชัน'
      ],
      en: [
        'Gathered business requirements and designed appropriate system workflows',
        'Designed and developed ERP modules for procurement, production planning and manufacturing orders',
        'Built executive dashboards using production data and operational KPIs',
        'Developed database-driven web applications with C#, ASP.NET and SQL',
        'Built real-time machine monitoring and performance data systems',
        'Applied AI and computer vision for production defect inspection',
        'Produced flowcharts, performed testing and resolved application issues'
      ]
    },
    skills: ['C#', 'ASP.NET', 'SQL', 'ERP', 'System Analysis', 'Dashboard', 'AI Vision']
  },
  {
    company: 'TTNetwork Integration (Thailand) Co., Ltd.', period: 'Sep 2019 — Jan 2020',
    role: { th: 'นักศึกษาฝึกงานฝ่าย GMD', en: 'GMD Intern — Application Support' },
    category: { th: 'สนับสนุนแอปพลิเคชันองค์กร', en: 'Enterprise Application Support' },
    description: {
      th: 'สนับสนุนระบบและแก้ไขปัญหาแอปพลิเคชันภายในสำหรับ Toyota และบริษัทในเครือ',
      en: 'Provided application support for internal software used by Toyota and related companies.'
    },
    bullets: {
      th: [
        'สนับสนุนการใช้งานและแก้ไขปัญหาแอปพลิเคชันภายใน',
        'ตรวจสอบข้อผิดพลาด วิเคราะห์สาเหตุ และประสานงานกับทีมพัฒนา',
        'ติดตามการแก้ไขปัญหาเพื่อให้ผู้ใช้งานกลับมาใช้ระบบได้ตามปกติ'
      ],
      en: [
        'Supported and troubleshot internal business applications',
        'Investigated issues and coordinated resolutions with development teams',
        'Followed up on application incidents to restore normal operations'
      ]
    },
    skills: ['Application Support', 'Troubleshooting', 'User Support', 'Coordination']
  }
]

export const projects = [
  {
    id: 'vision', number: '01', icon: 'scan', color: 'cyan',
    name: { en: 'AI Vision Quality Inspection', th: 'AI Vision ตรวจสอบคุณภาพการผลิต' },
    tag: { en: 'COMPUTER VISION', th: 'คอมพิวเตอร์วิทัศน์' },
    description: { en: 'Automated visual inspection for manufacturing quality and defect detection.', th: 'ระบบตรวจสอบคุณภาพและตรวจจับข้อบกพร่องในกระบวนการผลิตด้วยภาพ' },
    stack: ['Python', 'OpenCV', 'AI Vision'],
    details: { en: ['Bottle quality inspection and defect classification', 'Visual measurement and reject decision workflows', 'Camera-to-dashboard integration'], th: ['ตรวจสอบคุณภาพขวดและจำแนกข้อบกพร่อง', 'วัดค่าจากภาพและตัดสินใจคัดแยกสินค้า', 'เชื่อมต่อกล้องกับระบบ Dashboard'] },
    images: [ "images/projects/ai-vision/image1.jpg",
              "images/projects/ai-vision/image2.jpg",
              "images/projects/ai-vision/image3.jpg",
           ], 
  videos: ["videos/ai-vision-demo2.mp4",
          // "videos/ai-vision-demo.mp4",
  ]
  },
  {
    id: 'cctv', number: '02', icon: 'shield', color: 'violet',
    name: { en: 'Smart CCTV Monitoring', th: 'ระบบติดตามสถานะกล้อง CCTV' },
    tag: { en: 'MONITORING SYSTEM', th: 'ระบบติดตามและแจ้งเตือน' },
    description: { en: 'Camera health monitoring, alerting and technician repair-job management.', th: 'ติดตามสถานะกล้อง แจ้งเตือนอัตโนมัติ และจัดการงานซ่อมของช่างเทคนิค' },
    stack: ['Node-RED', 'MySQL', 'LINE API'],
    details: { en: ['Online/offline event monitoring', 'Automated notification and repair ticket workflow', 'Operational dashboards and job tracking'], th: ['ตรวจสอบสถานะกล้องออนไลน์/ออฟไลน์', 'แจ้งเตือนและสร้างใบงานซ่อมอัตโนมัติ', 'Dashboard และติดตามสถานะงานซ่อม'] },
    images: [], videos: []
  },
  {
    id: 'erp', number: '03', icon: 'web', color: 'pink',
    name: { en: 'Full Stack Business Applications', th: 'พัฒนาเว็บแอปพลิเคชันสำหรับองค์กร' },
    tag: { en: 'FULL STACK DEVELOPMENT', th: 'FULL STACK DEVELOPMENT' },
    description: { en: 'Custom web applications that streamline internal workflows, connect business data and simplify daily operations.', th: 'ออกแบบและพัฒนาเว็บแอปสำหรับองค์กร เชื่อมโยงข้อมูลและขั้นตอนการทำงานให้สะดวก รวดเร็ว และเป็นระบบ' },
    stack: ['C#', 'ASP.NET', 'SQL'],
    details: { en: ['Enterprise application development', 'Database-driven business features', 'Internal dashboards and reporting'], th: ['พัฒนาแอปพลิเคชันสำหรับองค์กร', 'พัฒนาระบบธุรกิจที่เชื่อมต่อฐานข้อมูล', 'สร้าง Dashboard และรายงานภายใน'] },
    images: [], videos: []
  },
  {
    id: 'sales', number: '04', icon: 'sales', color: 'amber',
    name: { en: 'B2B Software Solutions & Sales', th: 'การนำเสนอโซลูชันซอฟต์แวร์ B2B' },
    tag: { en: 'CLIENT ENGAGEMENT', th: 'การดูแลลูกค้า' },
    description: { en: 'Technical presentations, solution discussions and relationship management for institutional clients.', th: 'นำเสนอโซลูชันด้านเทคนิค วิเคราะห์ความต้องการ และสร้างความสัมพันธ์กับลูกค้าองค์กร' },
    stack: ['Presentation', 'Discovery', 'Coordination'],
    details: { en: ['Client requirements discussions', 'Solution demonstrations and proposals', 'Cross-functional communication'], th: ['พูดคุยและรวบรวมความต้องการของลูกค้า', 'สาธิตโซลูชันและนำเสนอข้อเสนอ', 'ประสานงานระหว่างทีมและลูกค้า'] },
    images: 
              ["images/projects/sales/image1.jpg",
              "images/projects/sales/image2.jpg",
              "images/projects/sales/image3.jpg",
              "images/projects/sales/image4.jpg",
           ], 
   videos: []
  }
  ,{
    id: 'video-showcase', number: '05', icon: 'video', color: 'cyan',
    name: { en: 'YouTube Project Showcase', th: 'วิดีโอแสดงผลงานบน YouTube' },
    tag: { en: 'VIDEO SHOWCASE', th: 'วิดีโอผลงาน' },
    description: { en: 'A demonstration video shared for this portfolio. Project details can be customized.', th: 'วิดีโอสาธิตผลงานที่นำมาแสดงใน Portfolio สามารถแก้ไขชื่อและรายละเอียดภายหลังได้' },
    stack: ['YouTube', 'Demo'],
    details: { en: ['Watch the demonstration video below'], th: ['รับชมวิดีโอสาธิตด้านล่าง'] },
    images: [], videos: [],
    youtube: ['https://www.youtube.com/watch?v=8sAcIwrVUYo&t=5s']
  }
  ,{
    // 📸 EXECUTIVE DASHBOARD: เพิ่มรูปใน public/images แล้วใส่ path ใน images
    id: 'executive-dashboard', number: '06', icon: 'analytics', color: 'cyan',
    name: { en: 'Executive KPI Dashboard', th: 'Executive Dashboard สำหรับผู้บริหาร' },
    tag: { en: 'EXECUTIVE ANALYTICS', th: 'รายงานสำหรับผู้บริหาร' },
    description: {
      en: 'Web dashboards that present KPIs, operational performance and management reports in an easy-to-understand format.',
      th: 'พัฒนาเว็บ Dashboard รวบรวม KPI ผลการดำเนินงาน กราฟ และรายงานสำคัญ เพื่อสนับสนุนการตัดสินใจของผู้บริหาร'
    },
    stack: ['Dashboard', 'SQL', 'API', 'Data Visualization'],
    details: {
      en: ['Designed responsive executive dashboards', 'Connected business data for charts and KPI reporting', 'Organized information to support management decisions'],
      th: ['ออกแบบ Dashboard สำหรับผู้บริหารให้รองรับมือถือและคอมพิวเตอร์', 'เชื่อมต่อข้อมูลเพื่อแสดงกราฟและตัวชี้วัด KPI', 'จัดรูปแบบรายงานให้อ่านง่ายและช่วยสนับสนุนการตัดสินใจ']
    },
    images: [], // ตัวอย่าง: ['images/executive-dashboard-1.png', 'images/executive-dashboard-2.png']
    videos: [], // ตัวอย่าง: ['videos/executive-dashboard-demo.mp4']
    youtube: [] // ตัวอย่าง: ['https://www.youtube.com/watch?v=VIDEO_ID']
  },
  {
    // 📸 ERP SYSTEM: เพิ่มรูปใน public/images แล้วใส่ path ใน images
    id: 'erp-system', number: '07', icon: 'database', color: 'pink',
    name: { en: 'Enterprise Resource Planning (ERP)', th: 'ระบบบริหารจัดการองค์กร ERP' },
    tag: { en: 'ENTERPRISE APPLICATION', th: 'ระบบงานองค์กร' },
    description: {
      en: 'Enterprise software supporting internal workflows, procurement, operational data and business process tracking.',
      th: 'พัฒนาระบบ ERP เพื่อสนับสนุนกระบวนการภายในองค์กร เช่น การจัดซื้อ การจัดการข้อมูล และการติดตามสถานะงาน'
    },
    stack: ['C#', 'ASP.NET', 'SQL Server', 'ERP'],
    details: {
      en: ['Analyzed user requirements and business workflows', 'Developed enterprise modules for operational processes', 'Built database-backed forms and reports'],
      th: ['วิเคราะห์ความต้องการผู้ใช้และขั้นตอนการทำงาน', 'พัฒนาฟังก์ชันระบบสำหรับกระบวนการดำเนินงาน', 'พัฒนาแบบฟอร์มและรายงานที่เชื่อมต่อฐานข้อมูล']
    },
    images: [], // ตัวอย่าง: ['images/erp-1.png', 'images/erp-2.png']
    videos: [],
    youtube: []
  },
  {
    // 📸 LINE LIFF: เพิ่มรูปหน้าจอมือถือใน public/images แล้วใส่ path ใน images
    id: 'line-liff', number: '08', icon: 'mobile', color: 'amber',
    name: { en: 'LINE LIFF Customer Portal', th: 'LINE LIFF เว็บแอปสำหรับลูกค้า' },
    tag: { en: 'CUSTOMER WEB APPLICATION', th: 'เว็บแอปสำหรับลูกค้า' },
    description: {
      en: 'Mobile-friendly web experiences integrated with LINE to help customers access services and information.',
      th: 'พัฒนาเว็บแอปที่ใช้งานผ่าน LINE เพื่อให้ลูกค้าเข้าถึงบริการ ดูข้อมูล และติดต่อธุรกิจได้สะดวกบนมือถือ'
    },
    stack: ['LINE LIFF', 'JavaScript', 'REST API', 'Responsive Web'],
    details: {
      en: ['Designed mobile-friendly customer screens', 'Integrated LINE LIFF with web application flows', 'Connected customer-facing services through APIs'],
      th: ['ออกแบบหน้าจอที่ใช้งานสะดวกบนมือถือ', 'เชื่อมต่อ LINE LIFF กับขั้นตอนการทำงานของเว็บแอป', 'เชื่อมต่อ API เพื่อให้บริการและแสดงข้อมูลแก่ลูกค้า']
    },
    images: [], // ตัวอย่าง: ['images/line-liff-1.png', 'images/line-liff-2.png']
    videos: [],
    youtube: []
  }
]

export const skillGroups = [
  { name: { en: 'Development', th: 'การพัฒนาซอฟต์แวร์' }, items: ['C# / ASP.NET', 'Python', 'JavaScript', 'React', 'PHP / Laravel'] },
  { name: { en: 'Data & Integration', th: 'ฐานข้อมูลและการเชื่อมต่อ' }, items: ['SQL / MySQL', 'MongoDB', 'REST APIs', 'Node-RED', 'Git'] },
  { name: { en: 'Specialties', th: 'ความเชี่ยวชาญอื่น ๆ' }, items: ['AI Vision', 'System Analysis', 'Technical Support', 'Dashboard Design', 'Client Communication'] },
  { name: { en: 'Sales & Business Development', th: 'การขายและพัฒนาธุรกิจ' }, items: ['B2B Sales', 'Software Solution Sales', 'Client Relationship Management', 'Customer Needs Analysis', 'Sales Presentation & Demo', 'Negotiation', 'Business Development', 'After-Sales Support'] }
]
