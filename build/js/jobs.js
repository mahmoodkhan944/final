// ===== Jobs Page Data & Functions =====

const countriesData = {
    'Europe': [
        'Spain', 'Portugal', 'Sweden', 'Italy', 'Poland', 'Czech Republic',
        'Slovakia', 'Slovenia', 'Albania', 'Serbia', 'Belarus', 'Croatia',
        'Malta', 'Hungary', 'Bulgaria', 'Romania', 'Armenia', 'Russia'
    ],
    'Middle East': [
        'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'
    ],
    'Asia': [
        'Taiwan', 'Malaysia'
    ]
};

// Sample job listings (can be replaced with API data)
const jobListings = [
    {
        id: 1,
        country: 'Spain',
        position: 'Warehouse Manager',
        company: 'Logistics Europe Inc.',
        salary: '€25,000 - €35,000',
        type: 'Full-time',
        visa: 'Work Visa',
        description: 'Looking for experienced warehouse manager for Barcelona facility'
    },
    {
        id: 2,
        country: 'UAE',
        position: 'Logistics Coordinator',
        company: 'Gulf Trading Corp',
        salary: 'AED 4,000 - 6,000',
        type: 'Full-time',
        visa: 'Sponsored Visa',
        description: 'Coordinate logistics operations in Dubai warehouse'
    },
    {
        id: 3,
        country: 'Poland',
        position: 'Forklift Operator',
        company: 'European Distribution',
        salary: '€18,000 - €22,000',
        type: 'Full-time',
        visa: 'Work Visa',
        description: 'Experienced forklift operator needed for Warsaw facility'
    },
    {
        id: 4,
        country: 'Saudi Arabia',
        position: 'Storekeeper',
        company: 'Middle East Industries',
        salary: 'SAR 4,500 - 6,500',
        type: 'Full-time',
        visa: 'Sponsored Visa',
        description: 'Manage store inventory and documentation'
    },
    {
        id: 5,
        country: 'Sweden',
        position: 'Store Manager',
        company: 'Nordic Logistics',
        salary: 'SEK 380,000 - 420,000',
        type: 'Full-time',
        visa: 'Work Visa',
        description: 'Lead store operations in Stockholm'
    },
    {
        id: 6,
        country: 'Qatar',
        position: 'Warehouse Worker',
        company: 'Gulf Logistics Ltd',
        salary: 'QAR 3,500 - 4,500',
        type: 'Full-time',
        visa: 'Sponsored Visa',
        description: 'General warehouse operations in Doha'
    }
];

/**
 * Initialize jobs page on load
 */
document.addEventListener('DOMContentLoaded', function () {
    renderCountries();
});

/**
 * Render countries grid
 */
function renderCountries() {
    const container = document.getElementById('countries-grid');
    if (!container) return;

    let html = '';

    Object.entries(countriesData).forEach(([region, countries]) => {
        html += `
            <div>
                <h4 style="color: var(--bs-secondary); margin-bottom: 15px; font-weight: 700;">${region}</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
        `;

        countries.forEach(country => {
            const jobCount = getJobCountByCountry(country);
            html += `
                <div class="country-box" onclick="viewCountryJobs('${country}')" style="cursor: pointer;">
                    <p style="margin-bottom: 5px; font-weight: 600;">${country}</p>
                    <p style="margin: 0; font-size: 0.85rem; opacity: 0.8;">${jobCount} Jobs</p>
                </div>
            `;
        });

        html += '</div></div>';
    });

    container.innerHTML = html;
}

/**
 * Get all countries list
 * @returns {Array} Array of all countries
 */
function getAllCountries() {
    const allCountries = [];
    Object.values(countriesData).forEach(countries => {
        allCountries.push(...countries);
    });
    return allCountries;
}

/**
 * Get jobs by country
 * @param {string} country - Country name
 * @returns {Array} Jobs in that country
 */
function getJobsByCountry(country) {
    return jobListings.filter(job => job.country === country);
}

/**
 * Get job count by country
 * @param {string} country - Country name
 * @returns {number} Number of jobs
 */
function getJobCountByCountry(country) {
    return getJobsByCountry(country).length;
}

/**
 * View jobs for a specific country
 * @param {string} country - Country name
 */
function viewCountryJobs(country) {
    const jobs = getJobsByCountry(country);

    if (jobs.length === 0) {
        showNotification(`No jobs currently available in ${country}`, 'info');
        return;
    }

    // Display jobs in modal or new page
    displayJobsModal(country, jobs);
}

/**
 * Display jobs in modal
 * @param {string} country - Country name
 * @param {Array} jobs - Array of jobs
 */
function displayJobsModal(country, jobs) {
    // Create modal HTML
    let modalHtml = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 20px;
        " id="jobsModal">
            <div style="
                background: white;
                border-radius: 15px;
                max-width: 700px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                padding: 30px;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 style="margin: 0; color: var(--bs-primary);">Jobs in ${country}</h2>
                    <button onclick="closeJobsModal()" style="
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        cursor: pointer;
                        color: #999;
                    ">×</button>
                </div>
                <div style="border-top: 2px solid #e0e0e0; padding-top: 20px;">
    `;

    // Add job listings
    jobs.forEach(job => {
        modalHtml += `
            <div style="
                background: #f8f9fa;
                border-radius: 10px;
                padding: 15px;
                margin-bottom: 15px;
                border-left: 4px solid var(--bs-secondary);
            ">
                <h4 style="color: var(--bs-primary); margin: 0 0 5px 0;">${job.position}</h4>
                <p style="margin: 5px 0; color: #666; font-size: 0.9rem;"><strong>${job.company}</strong></p>
                <p style="margin: 5px 0; color: #666; font-size: 0.9rem;">${job.description}</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                    <p style="margin: 0; font-size: 0.85rem;"><strong>💰</strong> ${job.salary}</p>
                    <p style="margin: 0; font-size: 0.85rem;"><strong>📋</strong> ${job.type}</p>
                    <p style="margin: 0; font-size: 0.85rem;"><strong>📄</strong> ${job.visa}</p>
                </div>
                <button onclick="applyForJob(${job.id})" style="
                    width: 100%;
                    margin-top: 10px;
                    padding: 8px;
                    background: linear-gradient(135deg, var(--bs-secondary) 0%, #e01a47 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                ">Apply Now</button>
            </div>
        `;
    });

    modalHtml += `
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('jobsModal');
    if (existingModal) existingModal.remove();

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Close modal on background click
    document.getElementById('jobsModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeJobsModal();
        }
    });
}

/**
 * Close jobs modal
 */
function closeJobsModal() {
    const modal = document.getElementById('jobsModal');
    if (modal) {
        modal.style.animation = 'fadeIn 0.3s ease-out reverse';
        setTimeout(() => modal.remove(), 300);
    }
}

/**
 * Apply for a job
 * @param {number} jobId - Job ID
 */
function applyForJob(jobId) {
    const job = jobListings.find(j => j.id === jobId);
    if (!job) return;

    // Save job to session/local storage
    setLocalStorage('selectedJob', job);

    // Close modal
    closeJobsModal();

    // Navigate to contact page
    showNotification(`Application started for ${job.position}. Please fill out the form.`, 'success');
    setTimeout(() => {
        goTo('contact.html');
    }, 1500);
}

/**
 * Search jobs by keyword
 * @param {string} keyword - Search keyword
 * @returns {Array} Filtered jobs
 */
function searchJobs(keyword) {
    const lowerKeyword = keyword.toLowerCase();

    return jobListings.filter(job =>
        job.country.toLowerCase().includes(lowerKeyword) ||
        job.position.toLowerCase().includes(lowerKeyword) ||
        job.company.toLowerCase().includes(lowerKeyword) ||
        job.description.toLowerCase().includes(lowerKeyword)
    );
}

/**
 * Filter jobs by criteria
 * @param {Object} criteria - Filter criteria
 * @returns {Array} Filtered jobs
 */
function filterJobs(criteria) {
    return jobListings.filter(job => {
        if (criteria.country && job.country !== criteria.country) return false;
        if (criteria.visa && job.visa !== criteria.visa) return false;
        if (criteria.salaryMin && parseFloat(job.salary) < criteria.salaryMin) return false;
        if (criteria.salaryMax && parseFloat(job.salary) > criteria.salaryMax) return false;
        return true;
    });
}

/**
 * Get total job count
 * @returns {number} Total jobs
 */
function getTotalJobs() {
    return jobListings.length;
}

/**
 * Get countries with jobs
 * @returns {Array} Countries with available jobs
 */
function getCountriesWithJobs() {
    return [...new Set(jobListings.map(job => job.country))];
}

/**
 * Get job by ID
 * @param {number} jobId - Job ID
 * @returns {Object} Job data
 */
function getJobById(jobId) {
    return jobListings.find(job => job.id === jobId);
}

/**
 * Sort jobs by criteria
 * @param {string} sortBy - Sort field (salary, position, country)
 * @param {string} order - Sort order (asc, desc)
 * @returns {Array} Sorted jobs
 */
function sortJobs(sortBy = 'country', order = 'asc') {
    const sorted = [...jobListings];

    sorted.sort((a, b) => {
        let aVal = a[sortBy];
        let bVal = b[sortBy];

        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }

        if (order === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    return sorted;
}