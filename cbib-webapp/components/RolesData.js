import React from 'react'


/**
 * Defines the access that each role has
 */
export const RolesData = [
    {
        "role": "General User",
        "access": ["View"],
        
    },
    {
        "role": "Student",
        "access": ["View", "Authentication", "Profile"]

    },
    {
        "role": "Researcher",
        "access": ["View", "Authentication", "Profile", "Create Team", "Upload Publication"]
    },
    {
        "role": "Research Admin",
        "access": ["View", "Authentication", "Profile", "Create Team", "Upload Publication", "Manage Members", "Manage Team"]
    },
    {
        "role": "Group Leader",
        "access": ["View", "Authentication", "Profile", "Create Team", "Upload Publication", "Manage Members", "Manage Team"]
    },
    {
        "role": "Organisation",
        "access": ["View", "Authentication", "Profile", "Create Team", "Upload Publication", "Manage Members", "Manage Team", "Manage Roles"]
    },
    {
        "role": "CAIR Admin",
        "access": ["View", "Authentication", "Profile", "Create Team", "Upload Publication", "Manage Members", "Manage Team", "Manage Roles"]
    },
    {
        "role": "Super Admin (Technical)",
        "access": ["View", "Authentication", "Profile", "Create Team", "Upload Publication", "Manage Members", "Manage Team", "Manage Roles", "Security"]

    }
]