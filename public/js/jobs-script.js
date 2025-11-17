// jobs-script.js

// Sample job data
const jobs = [
    {
        id: 1,
        title: "Registered Nurse",
        company: "Dubai Health Authority",
        country: "UAE",
        category: "Healthcare",
        experience: "3-5 years",
        type: "Full-time",
        location: "Dubai",
        salary: "$3,500 - $5,000",
        salaryNum: 4250,
        description: "Seeking experienced registered nurses for leading healthcare facilities in Dubai. Provide high-quality patient care and work in a multicultural environment.",
        tags: ["Healthcare", "Nursing", "Patient Care", "DHA License"],
        badge: "featured",
        posted: "2 days ago",
        requirements: [
            "Valid nursing license (DHA/DOH preferred)",
            "Minimum 3 years of clinical experience",
            "Excellent communication skills in English",
            "Strong patient care abilities",
            "Ability to work in multicultural environment"
        ],
        responsibilities: [
            "Provide direct patient care and treatment",
            "Monitor patient vital signs and condition",
            "Administer medications and treatments",
            "Collaborate with healthcare team",
            "Maintain accurate patient records"
        ],
        benefits: [
            "Tax-free salary",
            "Health insurance coverage",
            "Annual flight tickets",
            "30 days annual leave",
            "Professional development opportunities"
        ]
    },
    {
        id: 2,
        title: "Civil Engineer",
        company: "Construction Corp",
        country: "Saudi Arabia",
        category: "Engineering",
        experience: "5+ years",
        type: "Full-time",
        location: "Riyadh",
        salary: "$4,500 - $7,000",
        salaryNum: 5750,
        description: "Lead infrastructure projects in Riyadh. Requires strong technical knowledge and project management experience in large-scale construction.",
        tags: ["Civil Engineering", "Project Management", "Infrastructure"],
        badge: "urgent",
        posted: "1 day ago",
        requirements: [
            "Bachelor's degree in Civil Engineering",
            "5+ years experience in infrastructure projects",
            "Strong knowledge of AutoCAD and project management software",
            "Valid engineering license",
            "Excellent leadership skills"
        ],
        responsibilities: [
            "Manage large-scale infrastructure projects",
            "Review and approve engineering designs",
            "Coordinate with contractors and stakeholders",
            "Ensure project compliance with regulations",
            "Prepare technical reports and documentation"
        ],
        benefits: [
            "Competitive tax-free salary",
            "Family visa sponsorship",
            "Housing allowance",
            "Annual bonus",
            "Career advancement opportunities"
        ]
    },
    {
        id: 3,
        title: "Hotel Manager",
        company: "Luxury Resorts Group",
        country: "Qatar",
        category: "Hospitality",
        experience: "5+ years",
        type: "Full-time",
        location: "Doha",
        salary: "$4,000 - $6,000",
        salaryNum: 5000,
        description: "Manage operations at a 5-star resort in Doha. Excellent opportunity for hospitality professionals with leadership experience.",
        tags: ["Hotel Management", "Hospitality", "Leadership", "Customer Service"],
        badge: "new",
        posted: "3 days ago",
        requirements: [
            "Bachelor's degree in Hotel Management or related field",
            "5+ years in hotel operations management",
            "Strong financial management skills",
            "Excellent customer service orientation",
            "Fluent in English, Arabic is a plus"
        ],
        responsibilities: [
            "Oversee daily hotel operations",
            "Manage staff and department heads",
            "Ensure high guest satisfaction levels",
            "Monitor financial performance and budgets",
            "Implement quality standards and procedures"
        ],
        benefits: [
            "Luxury accommodation provided",
            "Performance-based bonuses",
            "Health and life insurance",
            "Annual leave and flight tickets",
            "Training and development programs"
        ]
    },
    {
        id: 4,
        title: "Software Developer",
        company: "Tech Solutions LLC",
        country: "UAE",
        category: "IT",
        experience: "3-5 years",
        type: "Full-time",
        location: "Abu Dhabi",
        salary: "$3,800 - $5,500",
        salaryNum: 4650,
        description: "Join our dynamic tech team developing innovative solutions. Experience with modern web technologies required.",
        tags: ["Software Development", "JavaScript", "React", "Node.js"],
        badge: "",
        posted: "5 days ago",
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years of full-stack development experience",
            "Proficiency in JavaScript, React, and Node.js",
            "Experience with database systems",
            "Strong problem-solving skills"
        ],
        responsibilities: [
            "Develop and maintain web applications",
            "Write clean, maintainable code",
            "Collaborate with cross-functional teams",
            "Participate in code reviews",
            "Debug and optimize application performance"
        ],
        benefits: [
            "Competitive salary package",
            "Remote work flexibility",
            "Health insurance",
            "Professional certification support",
            "Modern work environment"
        ]
    },
    {
        id: 5,
        title: "Factory Supervisor",
        company: "Industrial Manufacturing",
        country: "Poland",
        category: "Manufacturing",
        experience: "3-5 years",
        type: "Full-time",
        location: "Warsaw",
        salary: "$2,800 - $3,500",
        salaryNum: 3150,
        description: "Supervise production operations in modern manufacturing facility. Experience in automotive or electronics manufacturing preferred.",
        tags: ["Manufacturing", "Supervision", "Quality Control", "Production"],
        badge: "featured",
        posted: "4 days ago",
        requirements: [
            "3+ years supervisory experience in manufacturing",
            "Knowledge of production processes and quality standards",
            "Strong leadership and team management skills",
            "Familiarity with safety regulations",
            "Good English communication skills"
        ],
        responsibilities: [
            "Supervise production line operations",
            "Ensure quality standards are met",
            "Train and mentor production staff",
            "Monitor equipment performance",
            "Implement continuous improvement initiatives"
        ],
        benefits: [
            "EU work permit sponsorship",
            "Accommodation assistance",
            "Health insurance",
            "Annual bonuses",
            "Career growth opportunities"
        ]
    },
    {
        id: 6,
        title: "Electrical Technician",
        company: "Energy Solutions",
        country: "Romania",
        category: "Engineering",
        experience: "1-3 years",
        type: "Full-time",
        location: "Bucharest",
        salary: "$2,200 - $3,000",
        salaryNum: 2600,
        description: "Install and maintain electrical systems for commercial and residential projects. Training provided for qualified candidates.",
        tags: ["Electrical", "Maintenance", "Installation", "Technical"],
        badge: "new",
        posted: "1 week ago",
        requirements: [
            "Electrical technician certification",
            "1-3 years of electrical work experience",
            "Knowledge of electrical codes and safety",
            "Ability to read technical drawings",
            "Good problem-solving skills"
        ],
        responsibilities: [
            "Install electrical systems and equipment",
            "Perform maintenance and repairs",
            "Troubleshoot electrical issues",
            "Ensure compliance with safety standards",
            "Document work and maintain records"
        ],
        benefits: [
            "Work permit assistance",
            "Training and certification programs",
            "Health insurance",
            "Tool allowance",
            "Overtime opportunities"
        ]
    },
    {
        id: 7,
        title: "Chef de Cuisine",
        company: "Fine Dining Restaurant",
        country: "Kuwait",
        category: "Hospitality",
        experience: "5+ years",
        type: "Full-time",
        location: "Kuwait City",
        salary: "$3,200 - $4,500",
        salaryNum: 3850,
        description: "Lead our kitchen team at an upscale restaurant. Creative menu development and team management experience essential.",
        tags: ["Culinary", "Management", "Fine Dining", "Menu Planning"],
        badge: "",
        posted: "6 days ago",
        requirements: [
            "Culinary degree or equivalent certification",
            "5+ years experience in fine dining",
            "Strong menu development skills",
            "Excellent food presentation abilities",
            "Team leadership experience"
        ],
        responsibilities: [
            "Manage kitchen operations and staff",
            "Develop seasonal menus",
            "Ensure food quality and consistency",
            "Control food costs and inventory",
            "Maintain kitchen hygiene standards"
        ],
        benefits: [
            "Tax-free salary",
            "Meals provided",
            "Accommodation",
            "Annual flights home",
            "Creative freedom in menu design"
        ]
    },
    {
        id: 8,
        title: "Mechanical Engineer",
        company: "Oil & Gas Services",
        country: "UAE",
        category: "Engineering",
        experience: "5+ years",
        type: "Full-time",
        location: "Dubai",
        salary: "$5,000 - $7,500",
        salaryNum: 6250,
        description: "Design and oversee mechanical systems for oil and gas projects. Offshore experience is a plus.",
        tags: ["Mechanical Engineering", "Oil & Gas", "Design", "Project Management"],
        badge: "urgent",
        posted: "2 days ago",
        requirements: [
            "Bachelor's degree in Mechanical Engineering",
            "5+ years in oil and gas industry",
            "Strong knowledge of mechanical systems",
            "Experience with CAD software",
            "Offshore experience preferred"
        ],
        responsibilities: [
            "Design mechanical systems for oil and gas facilities",
            "Conduct engineering calculations and analysis",
            "Review technical specifications",
            "Coordinate with project teams",
            "Ensure compliance with industry standards"
        ],
        benefits: [
            "Excellent salary package",
            "Offshore allowances",
            "Comprehensive insurance",
            "Annual leave and flights",
            "Professional development support"
        ]
    },
    {
        id: 9,
        title: "Warehouse Manager",
        company: "Logistics International",
        country: "Czech Republic",
        category: "Manufacturing",
        experience: "3-5 years",
        type: "Full-time",
        location: "Prague",
        salary: "$2,500 - $3,200",
        salaryNum: 2850,
        description: "Manage warehouse operations and logistics. Strong organizational and leadership skills required.",
        tags: ["Logistics", "Warehouse", "Management", "Supply Chain"],
        badge: "",
        posted: "1 week ago",
        requirements: [
            "3+ years warehouse management experience",
            "Strong knowledge of inventory systems",
            "Excellent organizational skills",
            "Team leadership abilities",
            "Good English communication"
        ],
        responsibilities: [
            "Oversee warehouse operations",
            "Manage inventory and stock levels",
            "Coordinate shipments and deliveries",
            "Train and supervise warehouse staff",
            "Implement safety and efficiency procedures"
        ],
        benefits: [
            "EU work permit",
            "Relocation assistance",
            "Health insurance",
            "Performance bonuses",
            "Career advancement"
        ]
    },
    {
        id: 10,
        title: "Physiotherapist",
        company: "Rehabilitation Center",
        country: "Saudi Arabia",
        category: "Healthcare",
        experience: "1-3 years",
        type: "Full-time",
        location: "Jeddah",
        salary: "$3,000 - $4,200",
        salaryNum: 3600,
        description: "Provide physiotherapy services to patients. Modern facility with excellent equipment and professional development opportunities.",
        tags: ["Physiotherapy", "Rehabilitation", "Healthcare", "Patient Care"],
        badge: "new",
        posted: "3 days ago",
        requirements: [
            "Bachelor's degree in Physiotherapy",
            "Valid physiotherapy license",
            "1-3 years clinical experience",
            "Knowledge of rehabilitation techniques",
            "Good patient communication skills"
        ],
        responsibilities: [
            "Assess and treat patients",
            "Develop treatment plans",
            "Monitor patient progress",
            "Use therapeutic equipment",
            "Maintain patient records"
        ],
        benefits: [
            "Tax-free salary",
            "Health insurance",
            "Accommodation provided",
            "Annual leave and flights",
            "Continuing education support"
        ]
    },
    {
        id: 11,
        title: "Web Designer",
        company: "Digital Agency",
        country: "UAE",
        category: "IT",
        experience: "1-3 years",
        type: "Full-time",
        location: "Sharjah",
        salary: "$2,800 - $4,000",
        salaryNum: 3400,
        description: "Create engaging web designs for diverse clients. Strong portfolio and knowledge of modern design tools required.",
        tags: ["Web Design", "UI/UX", "Figma", "Creative"],
        badge: "",
        posted: "5 days ago",
        requirements: [
            "Bachelor's degree in Design or related field",
            "2+ years web design experience",
            "Proficiency in Figma, Adobe Creative Suite",
            "Strong portfolio of web projects",
            "Understanding of UX principles"
        ],
        responsibilities: [
            "Design website layouts and interfaces",
            "Create visual design elements",
            "Collaborate with developers",
            "Present design concepts to clients",
            "Ensure design consistency across projects"
        ],
        benefits: [
            "Creative work environment",
            "Health insurance",
            "Professional development",
            "Flexible working hours",
            "Latest design tools and software"
        ]
    },
    {
        id: 12,
        title: "Welding Supervisor",
        company: "Construction Group",
        country: "Qatar",
        category: "Construction",
        experience: "5+ years",
        type: "Full-time",
        location: "Doha",
        salary: "$3,500 - $4,800",
        salaryNum: 4150,
        description: "Supervise welding operations on major construction projects. Certification and extensive experience required.",
        tags: ["Welding", "Construction", "Supervision", "Quality Control"],
        badge: "featured",
        posted: "4 days ago",
        requirements: [
            "Welding certification (ASME/AWS)",
            "5+ years welding supervision experience",
            "Knowledge of welding standards and codes",
            "Strong safety awareness",
            "Leadership and team management skills"
        ],
        responsibilities: [
            "Supervise welding teams",
            "Ensure quality of welding work",
            "Conduct inspections and tests",
            "Maintain safety standards",
            "Train and mentor welders"
        ],
        benefits: [
            "Tax-free salary",
            "Accommodation",
            "Transportation provided",
            "Annual flights",
            "End-of-service benefits"
        ]
    }
];

let filteredJobs = [...jobs];

/**
 * Show job details in a modal
 */
function showJobDetails(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.createElement('div');
    modal.className = 'job-modal';
    modal.innerHTML = `
        <div class="job-modal-overlay" onclick="closeJobDetails()"></div>
        <div class="job-modal-content">
            <button class="modal-close" onclick="closeJobDetails()">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="modal-header">
                <div class="modal-header-content">
                    <h2 class="modal-job-title">${job.title}</h2>
                    <div class="modal-company">${job.company}</div>
                    <div class="modal-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${job.location}, ${job.country}</span>
                        <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                        <span><i class="fas fa-chart-line"></i> ${job.experience}</span>
                    </div>
                </div>
                ${job.badge ? `<span class="job-badge badge-${job.badge}">${job.badge.toUpperCase()}</span>` : ''}
            </div>

            <div class="modal-body">
                <div class="modal-salary-box">
                    <i class="fas fa-dollar-sign"></i>
                    <div>
                        <div class="salary-label">Salary Range</div>
                        <div class="salary-value">${job.salary}/month</div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3><i class="fas fa-info-circle"></i> Job Description</h3>
                    <p>${job.description}</p>
                </div>

                <div class="modal-section">
                    <h3><i class="fas fa-clipboard-check"></i> Requirements</h3>
                    <ul class="modal-list">
                        ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3><i class="fas fa-tasks"></i> Responsibilities</h3>
                    <ul class="modal-list">
                        ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3><i class="fas fa-gift"></i> Benefits</h3>
                    <ul class="modal-list benefits-list">
                        ${job.benefits.map(benefit => `<li><i class="fas fa-check-circle"></i> ${benefit}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-tags">
                    <strong>Skills & Keywords:</strong>
                    <div class="job-tags">
                        ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <div class="modal-footer-info">
                    <i class="far fa-clock"></i> Posted ${job.posted}
                </div>
                <div class="modal-footer-actions">
                    <button class="btn btn-secondary" onclick="closeJobDetails()">Close</button>
                    <a href="contact.html?job=${job.id}" class="btn btn-primary">Apply Now</a>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Animate modal entrance
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

/**
 * Close job details modal
 */
function closeJobDetails() {
    const modal = document.querySelector('.job-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

/**
 * Render jobs to the page
 */
function renderJobs(jobsToRender) {
    const jobsList = document.getElementById('jobsList');
    const resultsCount = document.getElementById('resultsCount');

    if (jobsToRender.length === 0) {
        jobsList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No jobs found</h3>
                <p>Try adjusting your filters to see more results</p>
            </div>
        `;
        resultsCount.textContent = 'No job opportunities found';
        return;
    }

    resultsCount.textContent = `Showing ${jobsToRender.length} job opportunit${jobsToRender.length === 1 ? 'y' : 'ies'}`;

    jobsList.innerHTML = jobsToRender.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div>
                    <div class="job-title">${job.title}</div>
                    <div class="job-company">${job.company}</div>
                </div>
                ${job.badge ? `<span class="job-badge badge-${job.badge}">${job.badge.toUpperCase()}</span>` : ''}
            </div>
            
            <div class="job-meta">
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}, ${job.country}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.type}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${job.experience}</span>
                </div>
                <div class="meta-item">
                    <i class="far fa-clock"></i>
                    <span>Posted ${job.posted}</span>
                </div>
            </div>
            
            <div class="job-description">${job.description}</div>
            
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            
            <div class="job-footer">
                <div class="salary">${job.salary}/month</div>
                <div class="job-actions">
                    <button onclick="showJobDetails(${job.id})" class="btn-details">View Details</button>
                    <a href="contact.html?job=${job.id}" class="btn-apply">Apply Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Apply filters to job listings
 */
function applyFilters() {
    const country = document.getElementById('country').value;
    const category = document.getElementById('category').value;
    const experience = document.getElementById('experience').value;
    const keyword = document.getElementById('keyword').value.toLowerCase();

    filteredJobs = jobs.filter(job => {
        const matchCountry = !country || job.country === country;
        const matchCategory = !category || job.category === category;
        const matchExperience = !experience || job.experience === experience;
        const matchKeyword = !keyword ||
            job.title.toLowerCase().includes(keyword) ||
            job.description.toLowerCase().includes(keyword) ||
            job.tags.some(tag => tag.toLowerCase().includes(keyword));

        return matchCountry && matchCategory && matchExperience && matchKeyword;
    });

    renderJobs(filteredJobs);
}

/**
 * Clear all filters
 */
function clearFilters() {
    document.getElementById('country').value = '';
    document.getElementById('category').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('keyword').value = '';
    filteredJobs = [...jobs];
    renderJobs(filteredJobs);
}

/**
 * Sort jobs based on selected option
 */
function sortJobs() {
    const sortBy = document.getElementById('sortBy').value;

    switch (sortBy) {
        case 'salary-high':
            filteredJobs.sort((a, b) => b.salaryNum - a.salaryNum);
            break;
        case 'salary-low':
            filteredJobs.sort((a, b) => a.salaryNum - b.salaryNum);
            break;
        case 'title':
            filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'recent':
        default:
            filteredJobs.sort((a, b) => a.id - b.id);
    }

    renderJobs(filteredJobs);
}

/**
 * Add event listener for Enter key on keyword search
 */
document.addEventListener('DOMContentLoaded', function () {
    const keywordInput = document.getElementById('keyword');

    if (keywordInput) {
        keywordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeJobDetails();
        }
    });

    // Initial render
    renderJobs(jobs);
});

/**
 * Export functions for external use
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        jobs,
        renderJobs,
        applyFilters,
        clearFilters,
        sortJobs,
        showJobDetails,
        closeJobDetails
    };
}