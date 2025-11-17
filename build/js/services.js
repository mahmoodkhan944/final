// ===== Services Page Data & Functions =====

const servicesData = [
    {
        title: 'Job Placement Process',
        steps: [
            {
                step: 'Registration',
                desc: 'Submit your application and documents for initial screening.'
            },
            {
                step: 'Profile Evaluation',
                desc: 'Our team matches your skills and experience with suitable job openings.'
            },
            {
                step: 'Interview & Selection',
                desc: 'We coordinate interviews with employers and provide interview preparation.'
            },
            {
                step: 'Offer Letter',
                desc: 'Once selected, you\'ll receive a verified employment offer.'
            },
            {
                step: 'Visa & Documentation',
                desc: 'We handle all paperwork and visa applications.'
            },
            {
                step: 'Travel & Settlement',
                desc: 'Final travel arrangements and relocation assistance to ensure a smooth transition.'
            }
        ]
    },
    {
        title: 'Visa & Work Permit Assistance',
        types: [
            'Work Visas – For skilled and unskilled workers in Europe and the Middle East.',
            'Permanent Residency (PR) – For long-term migration opportunities.',
            'Family Visas – For dependents and family reunification.',
            'Business & Investor Visas – For entrepreneurs seeking to expand globally.'
        ]
    },
    {
        title: 'Relocation Support',
        features: [
            'Housing and accommodation assistance',
            'Local city information and community guidance',
            'Airport pickup coordination',
            'Document legalization and attestation support',
            'Post-arrival job orientation'
        ]
    }
];

const jobCategoriesData = [
    {
        title: '🏭 Warehouse Jobs',
        subcategories: [
            {
                name: 'General Warehouse Operations',
                roles: ['Warehouse Worker / Associate', 'Picker / Packer', 'Loader / Unloader', 'Material Handler', 'Order Filler', 'Inventory Clerk']
            },
            {
                name: 'Logistics & Shipping',
                roles: ['Shipping & Receiving Clerk', 'Forklift Operator', 'Delivery Associate', 'Dispatch Assistant', 'Freight Handler', 'Logistics Coordinator']
            },
            {
                name: 'Equipment & Machinery',
                roles: ['Forklift Driver', 'Reach Truck Operator', 'Pallet Jack Operator', 'Machine Operator', 'Crane / Hoist Operator']
            }
        ]
    },
    {
        title: '🏢 Storekeeper Jobs',
        subcategories: [
            {
                name: 'General Storekeeping',
                roles: ['Storekeeper / Store Assistant', 'Assistant Storekeeper', 'Store In-charge', 'Warehouse Storekeeper', 'Inventory Storekeeper']
            },
            {
                name: 'Construction & Industrial Storekeeping',
                roles: ['Construction Storekeeper', 'Site Storekeeper', 'Civil Storekeeper', 'Mechanical Storekeeper', 'Electrical Storekeeper']
            },
            {
                name: 'Manufacturing & Factory Storekeeping',
                roles: ['Raw Material Storekeeper', 'Finished Goods Storekeeper', 'Production Storekeeper', 'Spare Parts Storekeeper', 'Tool Room Storekeeper']
            },
            {
                name: 'Maintenance & Technical Stores',
                roles: ['Maintenance Storekeeper', 'Equipment Storekeeper', 'Tools & Hardware Storekeeper', 'Engineering Storekeeper']
            },
            {
                name: 'Inventory & Documentation',
                roles: ['Inventory Controller', 'Store Record Keeper', 'Store Data Entry Operator', 'Store Clerk / Documentation Assistant']
            },
            {
                name: 'Logistics & Distribution',
                roles: ['Store & Dispatch Assistant', 'Store & Logistics Coordinator', 'Store & Warehouse Supervisor']
            }
        ]
    }
];

/**
 * Initialize services page on load
 */
document.addEventListener('DOMContentLoaded', function () {
    renderServices();
    renderJobCategories();
});

/**
 * Render services accordions
 */
function renderServices() {
    const container = document.getElementById('services-accordion');
    if (!container) return;

    let html = '';

    servicesData.forEach((service, index) => {
        html += createServiceAccordion(service, index);
    });

    container.innerHTML = html;
    attachServiceAccordionListeners();
}

/**
 * Create service accordion HTML
 * @param {Object} service - Service data
 * @param {number} index - Service index
 * @returns {string} HTML string
 */
function createServiceAccordion(service, index) {
    let contentHtml = '';

    // Handle job placement steps
    if (service.steps) {
        service.steps.forEach((item, stepIndex) => {
            contentHtml += `
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 8px;">
                        <div style="width: 30px; height: 30px; background: var(--bs-secondary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">${stepIndex + 1}</div>
                        <h4 style="margin: 0; color: var(--bs-primary); font-size: 1.1rem;">${item.step}</h4>
                    </div>
                    <p style="margin: 0; color: #666; padding-left: 45px; line-height: 1.6;">${item.desc}</p>
                </div>
            `;
        });
    }

    // Handle visa types
    if (service.types) {
        service.types.forEach(type => {
            contentHtml += `<p style="margin-bottom: 10px; color: #666; line-height: 1.6;">✓ ${type}</p>`;
        });
    }

    // Handle relocation features
    if (service.features) {
        service.features.forEach(feature => {
            contentHtml += `<p style="margin-bottom: 10px; color: #666; line-height: 1.6;">✓ ${feature}</p>`;
        });
    }

    return `
        <div class="accordion-item">
            <div class="accordion-header" data-accordion-id="service-${index}">
                <h5>${service.title}</h5>
                <div class="accordion-icon">+</div>
            </div>
            <div class="accordion-content" id="service-${index}">
                ${contentHtml}
            </div>
        </div>
    `;
}

/**
 * Attach click listeners to service accordion headers
 */
function attachServiceAccordionListeners() {
    const headers = document.querySelectorAll('#services-accordion .accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const contentId = this.dataset.accordionId;
            toggleAccordion(this, contentId);
        });
    });
}

/**
 * Render job categories accordions
 */
function renderJobCategories() {
    const container = document.getElementById('jobs-accordion');
    if (!container) return;

    let html = '';

    jobCategoriesData.forEach((category, index) => {
        html += createJobCategoryAccordion(category, index);
    });

    container.innerHTML = html;
    attachJobAccordionListeners();
}

/**
 * Create job category accordion HTML
 * @param {Object} category - Category data
 * @param {number} index - Category index
 * @returns {string} HTML string
 */
function createJobCategoryAccordion(category, index) {
    let subcategoriesHtml = '';

    category.subcategories.forEach((sub, subIndex) => {
        subcategoriesHtml += `
            <div style="margin-bottom: 20px;">
                <h5 style="color: var(--bs-primary); margin-bottom: 10px; font-weight: 600;">${sub.name}</h5>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-left: 20px;">
        `;

        sub.roles.forEach(role => {
            subcategoriesHtml += `<p style="margin: 0; color: #666;">• ${role}</p>`;
        });

        subcategoriesHtml += '</div></div>';
    });

    return `
        <div class="accordion-item">
            <div class="accordion-header" data-accordion-id="job-${index}">
                <h5>${category.title}</h5>
                <div class="accordion-icon">+</div>
            </div>
            <div class="accordion-content" id="job-${index}">
                ${subcategoriesHtml}
            </div>
        </div>
    `;
}

/**
 * Attach click listeners to job accordion headers
 */
function attachJobAccordionListeners() {
    const headers = document.querySelectorAll('#jobs-accordion .accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const contentId = this.dataset.accordionId;
            toggleAccordion(this, contentId);
        });
    });
}

/**
 * Search services by keyword
 * @param {string} keyword - Search keyword
 * @returns {Array} Filtered services
 */
function searchServices(keyword) {
    const lowerKeyword = keyword.toLowerCase();

    return servicesData.filter(service =>
        service.title.toLowerCase().includes(lowerKeyword)
    );
}

/**
 * Search job categories by keyword
 * @param {string} keyword - Search keyword
 * @returns {Array} Filtered job categories
 */
function searchJobCategories(keyword) {
    const lowerKeyword = keyword.toLowerCase();

    return jobCategoriesData.filter(category =>
        category.title.toLowerCase().includes(lowerKeyword) ||
        category.subcategories.some(sub =>
            sub.name.toLowerCase().includes(lowerKeyword) ||
            sub.roles.some(role => role.toLowerCase().includes(lowerKeyword))
        )
    );
}

/**
 * Get all available job roles
 * @returns {Array} All job roles
 */
function getAllJobRoles() {
    const roles = [];

    jobCategoriesData.forEach(category => {
        category.subcategories.forEach(sub => {
            roles.push(...sub.roles);
        });
    });

    return [...new Set(roles)]; // Remove duplicates
}

/**
 * Get service details
 * @param {number} index - Service index
 * @returns {Object} Service data
 */
function getServiceDetails(index) {
    return servicesData[index] || null;
}

/**
 * Get job category details
 * @param {number} index - Category index
 * @returns {Object} Category data
 */
function getJobCategoryDetails(index) {
    return jobCategoriesData[index] || null;
}

/**
 * Count total job openings
 * @returns {number} Total number of roles
 */
function getTotalJobCount() {
    return getAllJobRoles().length;
}

/**
 * Count job subcategories
 * @returns {number} Total subcategories
 */
function getJobSubcategoryCount() {
    let count = 0;
    jobCategoriesData.forEach(category => {
        count += category.subcategories.length;
    });
    return count;
}