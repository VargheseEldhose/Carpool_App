package ca.sheridancollege.dhill196.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.sheridancollege.dhill196.beans.Rider;

public interface RiderRepository extends JpaRepository<Rider, Long> {

}
