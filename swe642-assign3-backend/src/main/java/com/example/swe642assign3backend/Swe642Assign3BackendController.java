// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is the controller where all the API methods are defined
package com.example.swe642assign3backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import java.util.List;

@Controller
@RequestMapping("/api/v1.0")
public class Swe642Assign3BackendController {


    private final Swe642Assign3BackendRepository swe642Assign3BackendRepository;

    @Autowired
    public Swe642Assign3BackendController(Swe642Assign3BackendRepository swe642Assign3BackendRepository) {
    	this.swe642Assign3BackendRepository = swe642Assign3BackendRepository;
    }

    @PostMapping(path = "/createRecord",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<ServerResponse> createRecord(@RequestBody SurveyModel model) {
    	swe642Assign3BackendRepository.save(model);
		return ResponseEntity.ok(new ServerResponse("Survey data record created successfully."));
    }



    @GetMapping("/fetchAllSurveys")
    public @ResponseBody List<SurveyModel> fetchAllSurveys(SurveyModel model){
    	List<SurveyModel> surveyList = swe642Assign3BackendRepository.findAll();
    	return surveyList;
    }

}

