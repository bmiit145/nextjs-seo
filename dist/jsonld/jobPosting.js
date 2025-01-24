import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function JobPostingJsonLd({ type = 'JobPosting', keyOverride, baseSalary, hiringOrganization, applicantLocationRequirements, experienceRequirements, jobLocation, ...rest }) {
    function setBaseSalary(baseSalary) {
        if (baseSalary) {
            return {
                '@type': 'MonetaryAmount',
                currency: baseSalary.currency,
                value: {
                    '@type': 'QuantitativeValue',
                    unitText: baseSalary.unitText,
                    ...(Array.isArray(baseSalary.value)
                        ? {
                            minValue: baseSalary.value[0],
                            maxValue: baseSalary.value[1],
                        }
                        : { value: baseSalary.value }),
                },
            };
        }
        return undefined;
    }
    function setHiringOrganization(org) {
        if (org === 'confidential') {
            return 'confidential';
        }
        return {
            '@type': 'Organization',
            name: org.name,
            sameAs: org.sameAs,
            logo: org.logo,
        };
    }
    function setJobLocation(location) {
        if (location) {
            return {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: location.addressCountry,
                    addressLocality: location.addressLocality,
                    addressRegion: location.addressRegion,
                    postalCode: location.postalCode,
                    streetAddress: location.streetAddress,
                },
            };
        }
        return undefined;
    }
    function setApplicantLocationRequirements(requirements) {
        if (requirements) {
            return {
                '@type': 'Country',
                name: requirements,
            };
        }
        return undefined;
    }
    function setOccupationalExperienceRequirements(requirements) {
        if (requirements) {
            return {
                '@type': requirements['@type']
                    ? requirements['@type']
                    : 'OccupationalExperienceRequirements',
                monthsOfExperience: requirements.minimumMonthsOfExperience,
            };
        }
        return undefined;
    }
    function setEducationalOccupationalCredential(requirements) {
        if (requirements) {
            return {
                '@type': requirements['@type']
                    ? requirements['@type']
                    : 'EducationalOccupationalCredential',
                credentialCategory: requirements.credentialCategory,
            };
        }
        return undefined;
    }
    const data = {
        ...rest,
        baseSalary: setBaseSalary(baseSalary),
        hiringOrganization: setHiringOrganization(hiringOrganization),
        jobLocation: setJobLocation(jobLocation),
        applicantLocationRequirements: setApplicantLocationRequirements(applicantLocationRequirements),
        experienceRequirements: setOccupationalExperienceRequirements(experienceRequirements?.occupational),
        educationRequirements: setEducationalOccupationalCredential(experienceRequirements?.educational),
        experienceInPlaceOfEducation: experienceRequirements?.experienceInPlaceOfEducation,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "JobPosting" }));
}
export default JobPostingJsonLd;
