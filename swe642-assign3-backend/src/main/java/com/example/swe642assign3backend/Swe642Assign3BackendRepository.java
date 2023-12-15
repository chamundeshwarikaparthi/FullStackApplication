// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is the repository class where the database connection will be done with the SurveyModel
package com.example.swe642assign3backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Swe642Assign3BackendRepository extends JpaRepository<SurveyModel, Long> {
}

