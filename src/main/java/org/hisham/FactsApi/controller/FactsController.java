package org.hisham.FactsApi.controller;

import org.hisham.FactsApi.entity.Fact;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;

@RestController
@RequestMapping("/api")
public class FactsController {

    private RestTemplate restTemplate;

    @PostConstruct
    public void initialize()
    {
        restTemplate = new RestTemplate();
    }

    @CrossOrigin
    @GetMapping("/fact")
    public Fact getFact()
    {
        return restTemplate.getForObject("https://uselessfacts.jsph.pl/random.json?language=en",Fact.class);
    }
}
