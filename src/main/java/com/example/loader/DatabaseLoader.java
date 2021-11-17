package com.example.loader;

import com.example.repository.EmployeeRepository;
import com.example.repository.QueryRepository;
import com.example.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final QueryRepository queryRepository;
    private final EmployeeRepository employeeRepository;
    private final RatingRepository ratingRepository;

    @Autowired
    public DatabaseLoader(QueryRepository queryRepository, EmployeeRepository employeeRepository, RatingRepository ratingRepository) {
        this.queryRepository = queryRepository;
        this.employeeRepository = employeeRepository;
        this.ratingRepository = ratingRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
    }
}
