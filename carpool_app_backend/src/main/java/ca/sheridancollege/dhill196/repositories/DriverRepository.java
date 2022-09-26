package ca.sheridancollege.dhill196.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.sheridancollege.dhill196.beans.Driver;

public interface DriverRepository extends JpaRepository<Driver, Long> {

}
