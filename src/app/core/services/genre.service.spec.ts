import { GenreService } from "./genre.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('GenreService', ()=>{
  let genreService: GenreService,
      httpTestingController: HttpTestingController;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        GenreService
      ]
    });
    genreService = TestBed.get(GenreService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should all genre', () => {
    genreService.getGenreApi()
      .subscribe((genre) => {
        expect(genre).toBeTruthy("no genre returned");

        expect(genre.length).toBe(4, "incorrect number of genre")

        const genreMain = genre.find((genres) => {genres.id == "4"});

        expect(genreMain!.genre).toBe("soundtrack");
      });
  });

});
