package com.example.testrestapi.controller;

import com.example.testrestapi.entity.User;
import com.example.testrestapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "user")
@CrossOrigin(origins = "*", maxAge = 1600)
public class UserRestController {


    @Autowired
    UserRepository userRepository;


    @GetMapping("")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("")
    public User createUsers() {
        User user2 = new User("mathias", "zizou", "un developpeur en herbe", 25);
        return userRepository.save(user2);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public User UpdateUserById(@PathVariable("id") Long id) {
        User user = userRepository.getById(id);
        user.setAge(999);
        user.setDescription("tu a été modifier a zebi");
        user.setName("Modify");
        userRepository.save(user);
        return user;
    }


}
