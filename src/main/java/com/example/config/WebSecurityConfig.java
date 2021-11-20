package com.example.config;

import com.example.service.UserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        /*
        http
                .cors().and().csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
                .antMatchers(HttpMethod.GET, "/api/**").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
                .antMatchers(HttpMethod.POST, "/api/**").hasAnyAuthority("ADMIN", "EDITOR")
                .antMatchers(HttpMethod.DELETE, "/api/**").hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .formLogin().permitAll()
                .and()
                .logout().permitAll()
                .and()
                .exceptionHandling().accessDeniedPage("/403")
        ;
        http.formLogin().defaultSuccessUrl("/api", true);

         */
        http.cors().and().csrf().disable();
        http.authorizeRequests()
                .antMatchers("/").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
                .antMatchers(HttpMethod.GET, "/api/**").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
                .antMatchers(HttpMethod.POST, "/api/**").hasAnyAuthority("ADMIN", "EDITOR", "CREATOR")
                .antMatchers(HttpMethod.DELETE, "/api/**").hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                //.formLogin().permitAll()
                //.and()
                .logout().permitAll()
                .and()
                .httpBasic()
                .and()
                .exceptionHandling().accessDeniedPage("/403")
        ;
        http.formLogin().defaultSuccessUrl("/api", true);
    }
}
