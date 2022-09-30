package Hildy;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.*;


@Produces(MediaType.APPLICATION_JSON)
@Path("ducks")

public class DuckService {
    List<String> ducks = Arrays.asList("Melman", "Elmer");
    @GET
    public List<String> getDucks() {
        return ducks;
    }
}
